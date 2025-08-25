import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";

const PROTO_PATH = "../proto/auth.proto";

const packageDef = protoLoader.loadSync(PROTO_PATH, {});
const grpcObj = grpc.loadPackageDefinition(packageDef);
const authPackage = grpcObj.auth;


const client = new authPackage.AuthService(
  "localhost:50051",
  grpc.credentials.createInsecure()
);

client.Signup(
  { name: "john_doe", password: "secret123",email:"sabarim6369@gmail.com" },
  (err, response) => {
    if (err) {
      console.error("❌ Error:", err);
    } else {
      console.log("✅ Signup Response:", response);
    }
  }
);

client.Login(
  { username: "john_doe", password: "secret123" },
  (err, response) => {
    if (err) {
      console.error("❌ Error:", err);
    } else {
      console.log("✅ Login Response:", response);
    }
  }
);
