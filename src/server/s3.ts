import { S3Client } from "@aws-sdk/client-s3";
import { env } from "~/env.mjs";

const config = {
  region: env.AWS_BACKET_REGION,
  credentials: {
    accessKeyId: env.AWS_ACCESS_KEY_S3,
    secretAccessKey: env.AWS_SECRET_ACCESS_KEY_S3,
  },
  forcePathStyle: true,
};

export const s3Client = new S3Client({
  ...config,
  endpoint: env.S3_CLIENT_ENDPOINT,
});

export const s3Server = new S3Client({
  ...config,
  endpoint: env.S3_SERVER_ENDPOINT,
});
