import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '@env/environment.development';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
    xxx: boolean = false;

    ngOnInit(): void {
        console.log(environment.apiUrl);
    }

    /**
     *
     * @param a
     * @param b
     * @returns
     */
    onSum(a: number, b: number): number {
        return a + b;
    }

    /**
     *
     * @param a
     * @param b
     * @returns
     */
    onSubtract(a: number, b: number) {
        return a - b;
    }
}
