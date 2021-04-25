const mongoose = require("mongoose");

const campaignSchema = new mongoose.Schema(
    {
        campaign_name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Campaign_Type", campaignSchema);
