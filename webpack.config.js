import dotenv from "dotenv";
import { webpack } from "webpack";

dotenv.config({path:"port.env"});

const envs = [
    "HOST",
    "PORT",
    "WEATHER_API_KEY"
];

plugins:[
    new webpack.EnvironmentPlugin(envs)
];