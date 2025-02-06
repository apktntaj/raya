// "use server";

// import prisma from "./prisma";

// export async function createMilk(formData: FormData) {
//   try {
//     await prisma.milk.create({
//       data: {
//         time: new Date(),
//         type: formData.get("type"),
//         madeAt: new Date(formData.get("madeAt") as string),
//         expiredAt: new Date(formData.get("expiredAt") as string),
//         madeAmouhnt: parseInt(formData.get("madeAmount") as string),
//         leftAmount: parseInt(formData.get("leftAmount") as string),
//         amont: parseInt(formData.get("amount") as string),
//         desc: formData.get("desc") as string,
//       },
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }
