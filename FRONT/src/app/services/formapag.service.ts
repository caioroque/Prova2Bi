import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { formaPag } from "../models/formaPag";


@Injectable({
    providedIn: "root",
})
export class FormaPagService {
    private baseUrl = "http://localhost:5000/api/formapag";

    constructor(private http: HttpClient) {}

    list(): Observable<formaPag[]> {
        return this.http.get<formaPag[]>(`${this.baseUrl}/list`);
    }
}
