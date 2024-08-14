import { Pipe, PipeTransform } from "@angular/core";
import { Server } from "./server.model";

@Pipe({
    name: "sortServerByStatus"
})
export class SortServerByStatus implements PipeTransform {
    transform(value: Server[], order: 'asc' | 'desc' = 'asc') : Server[] {
        return value.sort((a , b) => {
            if(order === "asc"){
                return Number(a.status < b.status);
            } else if(order === "desc") {
                return Number(!(a.status < b.status));
            }
            return 0;
        });
    }
}