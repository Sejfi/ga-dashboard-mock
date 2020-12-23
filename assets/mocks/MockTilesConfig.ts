import { TileConfig } from '../../app/models/tile-config';
import { ReportType } from '../../app/enumerations/report-type.enum';
import { TileChartType } from '../../app/enumerations/tile-chart.enum';
import { DateRangeEnum } from '../../app/enumerations/date-range.enum';

export const mockTilesConfig: TileConfig[] = [
  {
    index: 0,
    order: 0,
    report: ReportType.traffic,
    chart: TileChartType.bar,
    dateRange: { range: DateRangeEnum.Week, from: null, to: null }
  },
  {
    index: 1,
    order: 1,
    report: ReportType.browser,
    chart: TileChartType.pie,
    dateRange: { range: DateRangeEnum.Week, from: null, to: null }
  }
];
