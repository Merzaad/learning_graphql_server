import { User } from "../models/User"

export const root = {
  users: async () => {
    return await User.find()
  },

  user: async ({ id }: { id: string }) => {
    return await User.findById(id)
  },

  createUser: async ({ input }: any) => {
    const user = new User(input)
    await user.save()
    return user
  },

  updateUser: async ({ id, input }: any) => {
    const updatedUser = await User.findByIdAndUpdate(id, input, {
      new: true,
      runValidators: true,
    })

    if (!updatedUser) {
      throw new Error("User not found")
    }

    return updatedUser
  },

  deleteUser: async ({ id }: { id: string }) => {
    const result = await User.findByIdAndDelete(id)
    return !!result
  },
}
