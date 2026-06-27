import mongoose, {Schema} from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const videoSchema = new Schema(
    {
        videoFile: {
            type: String, //cloudinary url
            required: true
        },
        thumbnail: {
            type: String, //cloudinary url
            required: true
        },
        title: {
            type: String, 
            required: true
        },
        description: {
            type: String, 
            required: true
        },
        duration: {
            type: Number, 
            required: true
        },
        views: {
            type: Number,
            default: 0
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }

    }, 
    {
        timestamps: true
    }
)

// mongoose-paginate-v2 plugin is used to add pagination capabilities to the video schema. This allows for easy retrieval of video records in a paginated manner, which is useful for displaying videos in a user interface without overwhelming the client with too much data at once.
videoSchema.plugin(mongoosePaginate);

export const Video = mongoose.model('Video',videoSchema);