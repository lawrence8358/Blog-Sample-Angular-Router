import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-layout3',
  templateUrl: './layout3.component.html',
  styleUrls: ['./layout3.component.css']
})
export class Layout3Component implements OnInit {

  id: string = "";

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.route.parent; //<==可以取得上層路由的相關資料，例如參數

    //取得參數方式1 **********************
    this.id = this.route.snapshot.params["id"]; //快照，僅初始值取值，後續不在重複取值
    //P.S 相同路由參數的切換，不會再進入 ngOnInit，因此使用快照就會無法取得新的參數資料

    //取得參數方式2 **********************
    //取得外部傳入的參數 (每次都取值)
    this.route.params.subscribe(params => {
      this.id = params["id"];
    });

    //取得參數方式3 **********************
    //可以透過RxJS的 switchMap將回傳的Observable轉換成另外一個Observable
    //使用情境，適合將取得的參數值送給Service去取得API回傳的資料，後續再subscribe接續處理
    //原則上 Observable都需要取消訂閱，但只有少數例外，ActivateRoute物件中就是例外，不須特別取消訂閱。
    this.route.params.
      switchMap((params: Params): string => {
        return params["id"];
      }).
      subscribe((convertId: string) => {
        () => { this.id = convertId; }
      });
  }
}
