import { stat } from "node:fs/promises";
import type { Stats } from "node:fs";
import { fileURLToPath } from "node:url";

const PROJECT_FILE_EXTENSIONS = [".md", ".mdx"] as const;

export type ProjectTimestamps = {
  publishedAt: Date;
  updatedAt: Date;
};

const resolveProjectFileUrl = (id: string, extension: string) =>
  new URL(`../content/projects/${id}${extension}`, import.meta.url);

export const getProjectFileStats = async (id: string): Promise<Stats> => {
  for (const extension of PROJECT_FILE_EXTENSIONS) {
    try {
      const fileUrl = resolveProjectFileUrl(id, extension);
      return await stat(fileURLToPath(fileUrl));
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code === "ENOENT") {
        continue;
      }
      throw error;
    }
  }

  throw new Error(`Unable to locate project file for id: ${id}`);
};

export const getProjectTimestamps = async (
  id: string
): Promise<ProjectTimestamps> => {
  const stats = await getProjectFileStats(id);
  return {
    publishedAt: stats.birthtime,
    updatedAt: stats.mtime,
  };
};
