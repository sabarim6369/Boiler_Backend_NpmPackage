import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";
import mongoose from "mongoose";
import { authService } from "./services/authService.js";

const PROTO_PATH = "../proto/auth.proto";

const packageDef = protoLoader.loadSync(PROTO_PATH, {});
const grpcObj = grpc.loadPackageDefinition(packageDef);
const authPackage = grpcObj.auth;

mongoose.connect("mongodb://localhost:27017/grpcAuth", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Error:", err));

const server = new grpc.Server();
server.addService(authPackage.AuthService.service, authService);

server.bindAsync("0.0.0.0:50051", grpc.ServerCredentials.createInsecure(), () => {
  console.log("🚀 gRPC Auth server running on 0.0.0.0:50051");
  server.start();
});
