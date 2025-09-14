
import dotenv from 'dotenv';
import Tenant from '../models/tenantModel.js';
import User from '../models/userModel.js';
import Note from '../models/notesModel.js';
import connectDB from '../config/db.js';

dotenv.config({ path: './.env' });

connectDB();

const importData = async () => {
  try {
    await Tenant.deleteMany();
    await User.deleteMany();
    await Note.deleteMany();

    const acme = await Tenant.create({ name: 'Acme', slug: 'acme' });
    const globex = await Tenant.create({ name: 'Globex', slug: 'globex' });

    await User.create([
      { name: 'Acme Admin', email: 'admin@acme.test', password: 'password', role: 'Admin', tenant: acme._id },
      { name: 'Acme User', email: 'user@acme.test', password: 'password', role: 'Member', tenant: acme._id },
      { name: 'Globex Admin', email: 'admin@globex.test', password: 'password', role: 'Admin', tenant: globex._id },
      { name: 'Globex User', email: 'user@globex.test', password: 'password', role: 'Member', tenant: globex._id },
    ]);

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

importData();