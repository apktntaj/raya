"use server";

import prisma from "./prisma";

export async function recordMilk(formData) {
  console.log(formData);
  // try {
  //   await prisma.milk.create({
  //     data: {
  //       type: formData.get("type"),
  //       madeAt: new Date(),
  //       madeAmount: parseInt(formData.get("madeAmount") || "0", 10),
  //       leftAmount: parseInt(formData.get("leftAmount") || "0", 10),
  //       amount: parseInt(formData.get("amount") || "0", 10),
  //       desc: formData.get("desc"),
  //     },
  //   });
  //   console.log("Data saved");
  // } catch (error) {
  //   console.log(error);
  // }
}

export async function createSleep(formData) {}

export async function createDiapers(formData) {}
