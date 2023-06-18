import AWS from 'aws-sdk';

// Configure the AWS SDK with your credentials
AWS.config.update({
  accessKeyId: 'AKIAVPN3LCIE7754DBGD',
  secretAccessKey: 'Bzv/RnmXJpNUHLmWaVzbnZ+oAJ1BpcX9h4l/O3qK',
  region: 'ap-northeast-2',
});

// Create an instance of the S3 service
const s3 = new AWS.S3();

// Function to upload an image to S3
export const uploadImageToS3 = async (file: File): Promise<string> => {
  const { name, type } = file;

  // Generate a unique file name (you can modify this as needed)
  const fileName = `image_${Date.now()}_${name}`;

  // Configure the S3 parameters
  const params: AWS.S3.PutObjectRequest = {
    Bucket: 'petnmat-dev',
    Key: fileName,
    Body: file,
    ContentType: type,
    ACL: 'public-read', // Set the appropriate ACL permissions
  };

  try {
    // Upload the image to S3
    const response = await s3.upload(params).promise();
    console.log('response :::', response);
    return response.Location!; // Return the uploaded file URL
  } catch (error) {
    console.error(error);
    throw new Error('Failed to upload image');
  }
};
