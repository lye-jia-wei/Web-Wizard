import boto3

# Configure Boto3 with your AWS credentials
session = boto3.Session(
    aws_access_key_id='',
    aws_secret_access_key='',
    region_name=''

)

bedrock = session.client('bedrock')
response = bedrock.list_models()  # Adjust as needed based on the SDK documentation
print(response)


import boto3

def invoke_claude_model(input_text):
    # Create a Bedrock client
    bedrock = boto3.client('bedrock', region_name='us-west-2')  # Replace 'your-region' with your AWS region

    try:
        # Invoke the Claude 3 model
        response = bedrock.invoke_model(
            modelId='Claude3',  # Use the appropriate model ID for Claude 3
            body={
                'InputText': input_text,
                # Add any other parameters required by the model if necessary
            }
        )

        # Extract the output from the response
        output = response['OutputText']  # Adjust based on the actual response structure
        return output

    except Exception as e:
        print(f"An error occurred: {e}")
        return None

if __name__ == "__main__":
    input_text = "What is the capital of France?"  # Example input
    result = invoke_claude_model(input_text)
    print(f"Response from Claude 3: {result}")
