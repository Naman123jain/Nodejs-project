const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/getVendorUsers', async (req, res) => {
    const { prId, custOrgId } = req.query;

    if (!prId || !custOrgId) {
        return res.status(400).json({ error: 'prId and custOrgId are required' });
    }

    try {
        const query = `
            SELECT DISTINCT v.VendorOrganizationId AS supplierId, v.UserName, v.Name
            FROM PrLineItems p
            JOIN VendorUsers v ON FIND_IN_SET(v.VendorOrganizationId, p.suppliers)
            WHERE p.purchaseRequestId = ? AND p.custOrgId = ? AND v.Role = 'Admin';
        `;

        const [rows] = await db.execute(query, [prId, custOrgId]);

        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
