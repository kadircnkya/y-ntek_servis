import mongoose from 'mongoose'

const inquirySchema = new mongoose.Schema(
  {
    name: String,
    phone: String,
    area: String,
    need: String,
    message: String,
  },
  { timestamps: true }
)

export default mongoose.model('Inquiry', inquirySchema)
