"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import { GetAllTagsParams, GetTopInteractedTagsParams } from "./shared.type";
import Tag from "@/database/tag.model";

export async function getInteractedTags(params: GetTopInteractedTagsParams) {
  try {
    connectToDatabase();
    const { userId, limit = 5 } = params;
    const user = await User.findById(userId);

    if (!user) {
      throw new Error("User not found");
    }

    //TODO:Find tag associated to user

    return [
      { _id: "1", name: "tag1" },
      { _id: "2", name: "tag2" },
      { _id: "3", name: "tag3" },
    ];
  } catch (error) {
    console.log(error);
  }
}

export async function getAllTags(params: GetAllTagsParams) {
  try {
    connectToDatabase();
    const { page = 1, pageSize = 20, filter, searchQuery } = params;
    const tags = await Tag.find({});

    if (!tags) {
      throw new Error("Tags not found");
    }

    return { tags };
  } catch (error) {
    console.log(error);
  }
}
