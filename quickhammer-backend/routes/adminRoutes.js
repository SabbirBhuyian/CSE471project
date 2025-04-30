const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router();

// Middleware to check if the user is an admin
const isAdmin = (req, res, next) => {
  if (req.session.isAdmin) {  // Assuming session stores whether the user is admin
    return next();
  }
  return res.status(403).json({ message: 'Forbidden. Admins only.' });
};

// View all users (Admins can view all registered users)
router.get('/users', isAdmin, async (req, res) => {
  try {
    const users = await User.find();  // Find all users
    res.status(200).json(users);  // Return all users
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error retrieving users' });
  }
});

// Approve a user (Set the user as approved)
router.post('/users/:id/approve', isAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.isApproved = true;  // Assuming there is an `isApproved` field
    await user.save();
    res.status(200).json({ message: 'User approved successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error approving user' });
  }
});

// Ban a user (Set the user as banned)
router.post('/users/:id/ban', isAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.isBanned = true;  // Assuming there is an `isBanned` field
    await user.save();
    res.status(200).json({ message: 'User banned successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error banning user' });
  }
});

// Verify a user (Set the user as verified)
router.post('/users/:id/verify', isAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.isVerified = true;  // Assuming there is an `isVerified` field
    await user.save();
    res.status(200).json({ message: 'User verified successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error verifying user' });
  }
});

// Reset user password
router.post('/users/:id/reset-password', isAdmin, async (req, res) => {
  const { newPassword } = req.body;

  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;  // Update the user's password
    await user.save();

    res.status(200).json({ message: 'Password reset successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error resetting password' });
  }
});

// Update user permissions (e.g., make user admin)
router.post('/users/:id/update-permissions', isAdmin, async (req, res) => {
  const { isAdminStatus } = req.body;  // Boolean to change user's admin status

  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.isAdmin = isAdminStatus;  // Assuming there's an `isAdmin` field
    await user.save();

    res.status(200).json({ message: `User permissions updated successfully` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating permissions' });
  }
});

module.exports = router;
