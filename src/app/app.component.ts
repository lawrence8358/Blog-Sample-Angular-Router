import * as querystring from 'querystring';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private route: ActivatedRoute, private router: Router) { }

  goLayout3() {

    //this.router.navigate(['/layout3', '2013']); //傳入陣列 (絕對位址)
    //this.router.navigateByUrl("/layout3/2013"); //傳入字串 (絕對位址)
    //this.router.navigate(["../layout3", "1911"], { relativeTo : this.route}); //相對位址

    //可選的路由參數，可傳入額外定義的參數
    //正常的QueryString表示法
    //此用法顯示網址為 : http://localhost:4200/layout3/2013?name=Lawrence&lastName=Shen
    //搭配參數取得方式為
    //this.route.snapshot.queryParams;
    //this.route.queryParams;
    this.router.navigate(['/layout3', '2013'], {
      queryParams: { name: "Lawrence", lastName: "Shen" }
    });

    //可選的路由參數(矩陣參數)，可傳入額外定義的參數
    //用法類似QueryString 只是每個參數的間隔使用分號區隔 (;)
    //此用法顯示網址為 : http://localhost:4200/layout3/2013;name=Lawrence;lastName=Shen
    //搭配參數取得方式為
    //this.route.snapshot.params;
    //this.route.params;
    //this.router.navigate(['/layout3', '2013', { name: "Lawrence", lastName: "Shen" }]);

  }
}
