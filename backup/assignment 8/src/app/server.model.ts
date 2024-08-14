import { stat } from "fs";

export class Server{
    public instanceType : String;
    public name : String;
    public status : String;
    public started : Date;

    constructor(instanceType : String, name : String, status : String, started : Date){
        this.name = name;
        this.instanceType = instanceType;
        this.status = status;
        this.started = started;
    }
  }