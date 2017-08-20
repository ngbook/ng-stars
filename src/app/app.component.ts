import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    // 用户评定的星星数量
    public starCnt: number;

    public selectChange(index) {
        this.starCnt = index;
    }
}
