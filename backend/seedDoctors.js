import mongoose from "mongoose";
import bcrypt from "bcrypt";
import doctorModel from "./models/doctorModel.js";
import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const seedDoctors = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`);
        console.log("DB Connected");

        // Default password for all doctors
        const password = "Doctor@123";
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const doctorsData = [
            {
                name: 'Dr. Richard James',
                email: 'richard.james@prescripto.com',
                password: hashedPassword,
                image: 'https://placehold.co/150/FF6B6B/FFFFFF?text=RJ',
                speciality: 'General physician',
                degree: 'MBBS',
                experience: '4 Years',
                about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
                fees: 50,
                address: { line1: '17th Cross, Richmond', line2: 'Circle, Ring Road, London' },
                available: true,
                date: Date.now()
            },
            {
                name: 'Dr. Emily Larson',
                email: 'emily.larson@prescripto.com',
                password: hashedPassword,
                image: 'https://placehold.co/150/4ECDC4/FFFFFF?text=EL',
                speciality: 'Gynecologist',
                degree: 'MBBS',
                experience: '3 Years',
                about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
                fees: 60,
                address: { line1: '27th Cross, Richmond', line2: 'Circle, Ring Road, London' },
                available: true,
                date: Date.now()
            },
            {
                name: 'Dr. Sarah Patel',
                email: 'sarah.patel@prescripto.com',
                password: hashedPassword,
                image: 'https://placehold.co/150/95E1D3/FFFFFF?text=SP',
                speciality: 'Dermatologist',
                degree: 'MBBS',
                experience: '1 Years',
                about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
                fees: 30,
                address: { line1: '37th Cross, Richmond', line2: 'Circle, Ring Road, London' },
                available: true,
                date: Date.now()
            },
            {
                name: 'Dr. Christopher Lee',
                email: 'christopher.lee@prescripto.com',
                password: hashedPassword,
                image: 'https://placehold.co/150/F38181/FFFFFF?text=CL',
                speciality: 'Pediatricians',
                degree: 'MBBS',
                experience: '2 Years',
                about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
                fees: 40,
                address: { line1: '47th Cross, Richmond', line2: 'Circle, Ring Road, London' },
                available: true,
                date: Date.now()
            },
            {
                name: 'Dr. Jennifer Garcia',
                email: 'jennifer.garcia@prescripto.com',
                password: hashedPassword,
                image: 'https://placehold.co/150/AA96DA/FFFFFF?text=JG',
                speciality: 'Neurologist',
                degree: 'MBBS',
                experience: '4 Years',
                about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
                fees: 50,
                address: { line1: '57th Cross, Richmond', line2: 'Circle, Ring Road, London' },
                available: true,
                date: Date.now()
            },
            {
                name: 'Dr. Andrew Williams',
                email: 'andrew.williams@prescripto.com',
                password: hashedPassword,
                image: 'https://placehold.co/150/FCBAD3/FFFFFF?text=AW',
                speciality: 'Neurologist',
                degree: 'MBBS',
                experience: '4 Years',
                about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
                fees: 50,
                address: { line1: '57th Cross, Richmond', line2: 'Circle, Ring Road, London' },
                available: true,
                date: Date.now()
            },
            {
                name: 'Dr. Christopher Davis',
                email: 'christopher.davis@prescripto.com',
                password: hashedPassword,
                image: 'https://placehold.co/150/FFFFD2/333333?text=CD',
                speciality: 'General physician',
                degree: 'MBBS',
                experience: '4 Years',
                about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
                fees: 50,
                address: { line1: '17th Cross, Richmond', line2: 'Circle, Ring Road, London' },
                available: true,
                date: Date.now()
            },
            {
                name: 'Dr. Timothy White',
                email: 'timothy.white@prescripto.com',
                password: hashedPassword,
                image: 'https://placehold.co/150/A8E6CF/FFFFFF?text=TW',
                speciality: 'Gynecologist',
                degree: 'MBBS',
                experience: '3 Years',
                about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
                fees: 60,
                address: { line1: '27th Cross, Richmond', line2: 'Circle, Ring Road, London' },
                available: true,
                date: Date.now()
            },
            {
                name: 'Dr. Ava Mitchell',
                email: 'ava.mitchell@prescripto.com',
                password: hashedPassword,
                image: 'https://placehold.co/150/FFD3B6/FFFFFF?text=AM',
                speciality: 'Dermatologist',
                degree: 'MBBS',
                experience: '1 Years',
                about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
                fees: 30,
                address: { line1: '37th Cross, Richmond', line2: 'Circle, Ring Road, London' },
                available: true,
                date: Date.now()
            },
            {
                name: 'Dr. Jeffrey King',
                email: 'jeffrey.king@prescripto.com',
                password: hashedPassword,
                image: 'https://placehold.co/150/FFAAA5/FFFFFF?text=JK',
                speciality: 'Pediatricians',
                degree: 'MBBS',
                experience: '2 Years',
                about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
                fees: 40,
                address: { line1: '47th Cross, Richmond', line2: 'Circle, Ring Road, London' },
                available: true,
                date: Date.now()
            },
            {
                name: 'Dr. Zoe Kelly',
                email: 'zoe.kelly@prescripto.com',
                password: hashedPassword,
                image: 'https://placehold.co/150/FF8B94/FFFFFF?text=ZK',
                speciality: 'Neurologist',
                degree: 'MBBS',
                experience: '4 Years',
                about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
                fees: 50,
                address: { line1: '57th Cross, Richmond', line2: 'Circle, Ring Road, London' },
                available: true,
                date: Date.now()
            },
            {
                name: 'Dr. Patrick Harris',
                email: 'patrick.harris@prescripto.com',
                password: hashedPassword,
                image: 'https://placehold.co/150/C7CEEA/FFFFFF?text=PH',
                speciality: 'Gastroenterologist',
                degree: 'MBBS',
                experience: '4 Years',
                about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
                fees: 50,
                address: { line1: '57th Cross, Richmond', line2: 'Circle, Ring Road, London' },
                available: true,
                date: Date.now()
            },
            {
                name: 'Dr. Chloe Evans',
                email: 'chloe.evans@prescripto.com',
                password: hashedPassword,
                image: 'https://placehold.co/150/B5EAD7/FFFFFF?text=CE',
                speciality: 'General physician',
                degree: 'MBBS',
                experience: '4 Years',
                about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
                fees: 50,
                address: { line1: '17th Cross, Richmond', line2: 'Circle, Ring Road, London' },
                available: true,
                date: Date.now()
            },
            {
                name: 'Dr. Ryan Martinez',
                email: 'ryan.martinez@prescripto.com',
                password: hashedPassword,
                image: 'https://placehold.co/150/FFDAC1/FFFFFF?text=RM',
                speciality: 'Gynecologist',
                degree: 'MBBS',
                experience: '3 Years',
                about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
                fees: 60,
                address: { line1: '27th Cross, Richmond', line2: 'Circle, Ring Road, London' },
                available: true,
                date: Date.now()
            },
            {
                name: 'Dr. Amelia Hill',
                email: 'amelia.hill@prescripto.com',
                password: hashedPassword,
                image: 'https://placehold.co/150/E2F0CB/333333?text=AH',
                speciality: 'Dermatologist',
                degree: 'MBBS',
                experience: '1 Years',
                about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
                fees: 30,
                address: { line1: '37th Cross, Richmond', line2: 'Circle, Ring Road, London' },
                available: true,
                date: Date.now()
            }
        ];

        // Clear existing doctors
        await doctorModel.deleteMany({});
        console.log("Cleared existing doctors");

        // Insert all doctors
        for (const doctor of doctorsData) {
            const newDoctor = new doctorModel(doctor);
            await newDoctor.save();
            console.log(`✓ Created: ${doctor.name} (${doctor.speciality})`);
        }

        console.log(`\n✅ Successfully seeded ${doctorsData.length} doctors!`);
        console.log("\nDefault password for all doctors: Doctor@123");

    } catch (error) {
        console.error("Error seeding doctors:", error);
    } finally {
        mongoose.disconnect();
    }
};

seedDoctors();
