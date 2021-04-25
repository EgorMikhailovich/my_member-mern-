const mongoose = require("mongoose");
const schema = mongoose.Schema
const stripeSchema = new schema(
    {
        stripeName: {
            type: String,
            trim: true,
            required: true,
            unique: true,
            maxlength: 32
        },
        color: {
            type: String,
            required: true
        },
        lable: {
            type: String,
            required: true
        },
        total_stripe: {
            type: String,
            required: true
        },
        progression: {
            type: String,
            required: true
        },
        candidate: {
            type: String,
            required: true
        },
        stripe_image: {
            type: String
        },
        age_requirement: {
            required: true,
            type: String
        },
        manage_stripe: [
            {
                type: schema.Types.ObjectId,
                ref: 'manageStripe'
            },
        ],
        userId: {
            type: schema.Types.ObjectId,
        },
        status: {
            type: String
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Stripe", stripeSchema);
