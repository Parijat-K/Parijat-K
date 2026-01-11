import { stat } from "node:fs/promises";
import type { Stats } from "node:fs";
import { join } from "node:path";

const PROJECT_FILE_EXTENSIONS = [".md", ".mdx"] as const;

export type ProjectTimestamps = {
  publishedAt: Date;
  updatedAt: Date;
};

const PROJECTS_DIR =
  typeof process !== "undefined" && typeof process.cwd === "function"
    ? join(process.cwd(), "src", "content", "projects")
    : null;

const resolveProjectFilePath = (id: string, extension: string) => {
  if (!PROJECTS_DIR) {
    throw new Error(
      "Project file metadata is only available during the build step."
    );
  }

  return join(PROJECTS_DIR, `${id}${extension}`);
};

export const getProjectFileStats = async (id: string): Promise<Stats> => {
  for (const extension of PROJECT_FILE_EXTENSIONS) {
    try {
      const filePath = resolveProjectFilePath(id, extension);
      return await stat(filePath);
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
