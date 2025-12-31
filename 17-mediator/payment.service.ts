import { Mediator } from "./mediator";

// 17-mediator/payment.service.ts
export class PaymentService {
    constructor(private mediator:Mediator){}

    completePayment(data:any){
        console.log("Payment completed")
        this.mediator.notify("PaymentService",data)
    }
}