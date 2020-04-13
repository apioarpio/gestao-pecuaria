import { Component, OnInit } from '@angular/core';
import {NbThemeService} from '@nebular/theme';

@Component({
  selector: 'ngx-tipos-animais-coletados',
  templateUrl: './tipos-animais-coletados.component.html',
  styleUrls: ['./tipos-animais-coletados.component.scss'],
})
export class TiposAnimaisColetadosComponent implements OnInit {
  options: any = {};
  themeSubscription: any;
  constructor(private theme: NbThemeService) { }

  ngOnInit(): void {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
      backgroundColor: echarts.bg,
      color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['Nelore', 'Angus', 'Composto', 'Canada', 'Russia'],
        textStyle: {
          color: echarts.textColor,
        },
      },
      series: [
        {
          name: 'Countries',
          type: 'pie',
          radius: '80%',
          center: ['50%', '50%'],
          data: [
            { value: 335, name: 'Nelore' },
            { value: 310, name: 'Angus' },
            { value: 234, name: 'Composto' },
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: echarts.itemHoverShadowColor,
            },
          },
          label: {
            normal: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
          },
        },
      ],
    };
  });
  }

}
