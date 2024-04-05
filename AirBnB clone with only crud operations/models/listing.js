const mongoose =require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image:{
        type: String,
        default: "https://www.ptireturns.com/blog/wp-content/uploads/2022/09/keys-in-property-management-agent-hand-min.jpg",
      
        set: (v)=> v==="" ? "https://www.ptireturns.com/blog/wp-content/uploads/2022/09/keys-in-property-management-agent-hand-min.jpg" : v,
    },
    price: Number,
    location: String,
    country: String,
});


const Listing = mongoose.model("Listing",listingSchema);

module.exports = Listing;