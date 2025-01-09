const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require("../Models/User");
const EventModel = require("../Models/Event");
const ContactModel = require("../Models/contact");



const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(409).json({
                message: 'User already exists, please login',
                success: false
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        // Create and save user with Anwesha ID
        const newUser = new UserModel({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save();

        res.status(201).json({
            message: "Signup successful",
            success: true,
            anweshaId: newUser.anweshaId,
            name: newUser.name,
            email: newUser.email
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};


const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        const errorMsg = 'Auth failed: email or password is wrong';

        if (!user) {
            return res.status(403).json({ message: errorMsg, success: false });
        }

        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(403).json({ message: errorMsg, success: false });
        }

        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id, anweshaId: user.anweshaId },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.status(200).json({
            message: "Login Success",
            success: true,
            jwtToken,
            email,
            name: user.name,
            anweshaId: user.anweshaId
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};  

const id = async (req, res) => {
    try {
        console.log("Received request on /auth/id");
        const { id } = req.body;
        const user = await UserModel.findOne({ anweshaId: id });

        if (!user) {
            return res.status(404).json({
                message: 'Auth failed: This Anwesha ID is not present',
                success: false,
            });
        }

        res.status(200).json({
            message: 'Anwesha ID is valid',
            success: true,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
};

const registerForEvent = async (req, res) => {
    try {
      const { title, teamName, participantCount, anweshaIds } = req.body;
      if (!title || !teamName || !participantCount || !anweshaIds || anweshaIds.length === 0) {
        return res.status(400).json({ success: false, message: "All fields are required." });
      }
  
      const newEvent = new EventModel({
        title,
        teamName,
        numberOfParticipants: participantCount,
        participants: anweshaIds,
      });
  
      const savedEvent = await newEvent.save();
      return res.status(201).json({
        success: true,
        message: "Registration successful",
        event: savedEvent,
      });
    } catch (error) {
      console.error("Error during event registration:", error);
      return res.status(500).json({
        success: false,
        message: "Failed to register for the event. Please try again.",
      });
    }
  };

  
  const remark = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        
        // Check if any required field is missing
        if (!name || !email || !message) {
            return res.status(400).json({ 
                success: false, 
                message: "All fields are required." 
            });
        }

        // Create a new remark using the ContactModel schema
        const newRemark = new ContactModel({
            name,
            email,
            message,
        });

        const savedcontact= await newRemark.save();

        // Return success response
        return res.status(201).json({
            success: true,
            message: "Remark saved successfully.",
            remark: savedcontact,
        });
    } catch (err) {
        console.error("Error during remark submission:", err);
        return res.status(500).json({
            success: false,
            message: "Something went wrong. Please try again later.",
        });
    }
};



module.exports = {
    signup,
    login,
    id,
    registerForEvent,
    remark
}