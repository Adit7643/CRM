import Redis from 'ioredis';
import mongoose from 'mongoose';
import Customer from '../models/CustomerModel.js'; 
import dotenv from 'dotenv'; 
dotenv.config({path:"../../.env"});

const redis = new Redis(); // or use URL for Redis cloud

// Connect to MongoDB
console.log(process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB error:', err));

// Subscribe to customer stream
async function subscribeToCustomerStream() {
  const streamKey = 'customerStream'; // Use a single shared stream for simplicity
  let lastId = '0';

  console.log(`📡 Listening to Redis Stream: ${streamKey}`);

  while (true) {
    const response = await redis.xread('BLOCK', 0, 'STREAMS', streamKey, lastId);
    const [stream, messages] = response[0];

    for (const [id, fields] of messages) {
      try {
        const payload = JSON.parse(fields[1]); // fields = ['data', JSON]
        const {
          customerId,
          name,
          phoneNumber,
          email,
          lastVisit,
          lastActive,
          expenditure
        } = payload;

        // Validate required fields
        if (!customerId || !name || !phoneNumber || !email) {
          console.error(`❌ Missing required customer fields: ${JSON.stringify(payload)}`);
          continue;
        }

        // Save to MongoDB (upsert)
        await Customer.findOneAndUpdate(
          { customerId },
          {
            customerId,
            name,
            phoneNumber,
            email,
            lastVisit: lastVisit ? new Date(lastVisit) : new Date(),
            lastActive: lastActive ? new Date(lastActive) : new Date(),
            expenditure: expenditure || 0
          },
          { upsert: true, new: true }
        );

        console.log(`✅ Saved customer: ${customerId}`);
      } catch (err) {
        console.error('❌ Error processing message:', err.message);
      }

      lastId = id; // Move to next stream ID
    }
  }
}

export default subscribeToCustomerStream;
