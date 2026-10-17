import 'server-only'
import mongoose from 'mongoose'
import { env } from './env'
import dns from 'node:dns'

dns.setServers(['1.1.1.1', '8.8.8.8'])

type MongooseCache = {
  conn: typeof mongoose | null
  promise: Promise<typeof mongoose> | null
}

const globalForMongoose = globalThis as unknown as {
  mongooseCache?: MongooseCache
}

const cache = (globalForMongoose.mongooseCache ??= {
  conn: null,
  promise: null,
})

export async function connectDB() {
  if (cache.conn) return cache.conn

  cache.promise ??= mongoose.connect(env.MONGODB_URI, {
    bufferCommands: false,
  })

  try {
    cache.conn = await cache.promise
  } catch (error) {
    cache.promise = null
    throw error
  }

  return cache.conn
}