import asyncHandler from 'express-async-handler';
import Tenant from '../models/tenantModel.js';

// @route   POST /api/tenants/:slug/upgrade
// @access  Private/Admin
const upgradeTenant = asyncHandler(async (req, res) => {    // Upgrade tenant to pro plan
  const tenant = await Tenant.findOne({ slug: req.params.slug });

  if (tenant) {
    tenant.plan = 'pro';
    const updatedTenant = await tenant.save();
    res.json(updatedTenant);
  } else {
    res.status(404);
    throw new Error('Tenant not found');
  }
});

export { upgradeTenant };