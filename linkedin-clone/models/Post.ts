import mongoose, { Schema, Document } from 'mongoose';

export interface IPost extends Document {
  author: mongoose.Schema.Types.ObjectId;
  content: string;
  createdAt: Date;
}

const PostSchema: Schema = new Schema<IPost>(
  {
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Post || mongoose.model<IPost>('Post', PostSchema);
