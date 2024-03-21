<div align="center">

[![Visit Vantage](./header.png)](https://vantage.sh)

# [Vantage](https://vantage.sh)<a id="vantage"></a>

Vantage API

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`vantage.accessGrants.createGrant`](#vantageaccessgrantscreategrant)
  * [`vantage.accessGrants.delete`](#vantageaccessgrantsdelete)
  * [`vantage.accessGrants.getSpecificGrant`](#vantageaccessgrantsgetspecificgrant)
  * [`vantage.accessGrants.listAccessible`](#vantageaccessgrantslistaccessible)
  * [`vantage.accessGrants.updateGrantToken`](#vantageaccessgrantsupdategranttoken)
  * [`vantage.businessMetrics.createNewMetric`](#vantagebusinessmetricscreatenewmetric)
  * [`vantage.businessMetrics.deleteExistingMetric`](#vantagebusinessmetricsdeleteexistingmetric)
  * [`vantage.businessMetrics.getAllMetrics`](#vantagebusinessmetricsgetallmetrics)
  * [`vantage.businessMetrics.getMetricById`](#vantagebusinessmetricsgetmetricbyid)
  * [`vantage.businessMetrics.updateExistingMetric`](#vantagebusinessmetricsupdateexistingmetric)
  * [`vantage.businessMetrics.updateValuesCsv`](#vantagebusinessmetricsupdatevaluescsv)
  * [`vantage.costs.createDashboard`](#vantagecostscreatedashboard)
  * [`vantage.costs.createReport`](#vantagecostscreatereport)
  * [`vantage.costs.deleteCostReport`](#vantagecostsdeletecostreport)
  * [`vantage.costs.deleteDashboard`](#vantagecostsdeletedashboard)
  * [`vantage.costs.getAll`](#vantagecostsgetall)
  * [`vantage.costs.getAllCostReports`](#vantagecostsgetallcostreports)
  * [`vantage.costs.getCostReport`](#vantagecostsgetcostreport)
  * [`vantage.costs.getSpecificDashboard`](#vantagecostsgetspecificdashboard)
  * [`vantage.costs.listCostReport`](#vantagecostslistcostreport)
  * [`vantage.costs.updateDashboard`](#vantagecostsupdatedashboard)
  * [`vantage.costs.updateReport`](#vantagecostsupdatereport)
  * [`vantage.dashboards.createDashboard`](#vantagedashboardscreatedashboard)
  * [`vantage.dashboards.deleteDashboard`](#vantagedashboardsdeletedashboard)
  * [`vantage.dashboards.getAll`](#vantagedashboardsgetall)
  * [`vantage.dashboards.getSpecificDashboard`](#vantagedashboardsgetspecificdashboard)
  * [`vantage.dashboards.updateDashboard`](#vantagedashboardsupdatedashboard)
  * [`vantage.filters.createSavedFilterForCostReports`](#vantagefilterscreatesavedfilterforcostreports)
  * [`vantage.filters.deleteSavedFilter`](#vantagefiltersdeletesavedfilter)
  * [`vantage.filters.getCostReportFilters`](#vantagefiltersgetcostreportfilters)
  * [`vantage.filters.getSavedFilter`](#vantagefiltersgetsavedfilter)
  * [`vantage.filters.updateSavedFilterForCostReports`](#vantagefiltersupdatesavedfilterforcostreports)
  * [`vantage.folders.createFolderForCostReports`](#vantagefolderscreatefolderforcostreports)
  * [`vantage.folders.deleteFolderForCostReports`](#vantagefoldersdeletefolderforcostreports)
  * [`vantage.folders.getSpecificFolder`](#vantagefoldersgetspecificfolder)
  * [`vantage.folders.listCostReports`](#vantagefolderslistcostreports)
  * [`vantage.folders.updateFolderForCostReports`](#vantagefoldersupdatefolderforcostreports)
  * [`vantage.notifications.createReportNotification`](#vantagenotificationscreatereportnotification)
  * [`vantage.notifications.deleteReportNotification`](#vantagenotificationsdeletereportnotification)
  * [`vantage.notifications.getAllReportNotifications`](#vantagenotificationsgetallreportnotifications)
  * [`vantage.notifications.getReportNotification`](#vantagenotificationsgetreportnotification)
  * [`vantage.notifications.updateReportNotification`](#vantagenotificationsupdatereportnotification)
  * [`vantage.ping.healthCheck`](#vantagepinghealthcheck)
  * [`vantage.prices.getProduct`](#vantagepricesgetproduct)
  * [`vantage.prices.getProductPrice`](#vantagepricesgetproductprice)
  * [`vantage.prices.getProductPrices`](#vantagepricesgetproductprices)
  * [`vantage.prices.listAvailableProducts`](#vantagepriceslistavailableproducts)
  * [`vantage.segments.createSegment`](#vantagesegmentscreatesegment)
  * [`vantage.segments.getSegmentById`](#vantagesegmentsgetsegmentbyid)
  * [`vantage.segments.list`](#vantagesegmentslist)
  * [`vantage.segments.removeSegment`](#vantagesegmentsremovesegment)
  * [`vantage.segments.updateSegmentById`](#vantagesegmentsupdatesegmentbyid)
  * [`vantage.teams.createNewTeam`](#vantageteamscreatenewteam)
  * [`vantage.teams.getSpecificTeam`](#vantageteamsgetspecificteam)
  * [`vantage.teams.listAccessible`](#vantageteamslistaccessible)
  * [`vantage.teams.removeTeam`](#vantageteamsremoveteam)
  * [`vantage.teams.updateTeam`](#vantageteamsupdateteam)
  * [`vantage.users.getSpecificUser`](#vantageusersgetspecificuser)
  * [`vantage.users.listAccessible`](#vantageuserslistaccessible)
  * [`vantage.workspaces.getSpecificWorkspace`](#vantageworkspacesgetspecificworkspace)
  * [`vantage.workspaces.listAccessible`](#vantageworkspaceslistaccessible)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Vantage&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { Vantage } from "vantage-typescript-sdk";

const vantage = new Vantage({
  // Defining the base path is optional and defaults to https://api.vantage.sh/v2
  // basePath: "https://api.vantage.sh/v2",
  oauthClientId: "CLIENT_ID",
  oauthClientSecret: "CLIENT_SECRET",
});

const createGrantResponse = await vantage.accessGrants.createGrant({
  resource_token: "resource_token_example",
  team_token: "team_token_example",
  access: "denied",
});

console.log(createGrantResponse);
```

## Reference<a id="reference"></a>


### `vantage.accessGrants.createGrant`<a id="vantageaccessgrantscreategrant"></a>

Create an Access Grant.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createGrantResponse = await vantage.accessGrants.createGrant({
  resource_token: "resource_token_example",
  team_token: "team_token_example",
  access: "denied",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### resource_token: `string`<a id="resource_token-string"></a>

The token of the resource for which you are granting access.

##### team_token: `string`<a id="team_token-string"></a>

The token of the Team you want to grant access to.

##### access: `string`<a id="access-string"></a>

The access level you want to grant. Defaults to \\\'allowed\\\'.

#### 🔄 Return<a id="🔄-return"></a>

[AccessGrant](./models/access-grant.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/access_grants` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.accessGrants.delete`<a id="vantageaccessgrantsdelete"></a>

Delete an Access Grant.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteResponse = await vantage.accessGrants.delete({
  accessGrantToken: "accessGrantToken_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### accessGrantToken: `string`<a id="accessgranttoken-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[AccessGrant](./models/access-grant.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/access_grants/{access_grant_token}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.accessGrants.getSpecificGrant`<a id="vantageaccessgrantsgetspecificgrant"></a>

Return a specific Access Grant.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpecificGrantResponse = await vantage.accessGrants.getSpecificGrant({
  accessGrantToken: "accessGrantToken_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### accessGrantToken: `string`<a id="accessgranttoken-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[AccessGrant](./models/access-grant.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/access_grants/{access_grant_token}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.accessGrants.listAccessible`<a id="vantageaccessgrantslistaccessible"></a>

Return all Access Grants that the current API token has access to.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAccessibleResponse = await vantage.accessGrants.listAccessible({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

The page of results to return.

##### limit: `number`<a id="limit-number"></a>

The amount of results to return. The maximum is 1000.

#### 🔄 Return<a id="🔄-return"></a>

[AccessGrants](./models/access-grants.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/access_grants` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.accessGrants.updateGrantToken`<a id="vantageaccessgrantsupdategranttoken"></a>

Update an AccessGrant.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateGrantTokenResponse = await vantage.accessGrants.updateGrantToken({
  accessGrantToken: "accessGrantToken_example",
  access: "denied",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### access: `string`<a id="access-string"></a>

Allowed or denied access to resource.

##### accessGrantToken: `string`<a id="accessgranttoken-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[AccessGrant](./models/access-grant.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/access_grants/{access_grant_token}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.businessMetrics.createNewMetric`<a id="vantagebusinessmetricscreatenewmetric"></a>

Create a new Business Metric.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewMetricResponse = await vantage.businessMetrics.createNewMetric({
  title: "title_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### title: `string`<a id="title-string"></a>

The title of the Business Metric.

##### cost_report_tokens_with_metadata: [`PostBusinessMetricsCostReportTokensWithMetadataInner`](./models/post-business-metrics-cost-report-tokens-with-metadata-inner.ts)[]<a id="cost_report_tokens_with_metadata-postbusinessmetricscostreporttokenswithmetadatainnermodelspost-business-metrics-cost-report-tokens-with-metadata-innerts"></a>

The tokens for any CostReports that use the BusinessMetric, and the unit scale.

##### values: [`PostBusinessMetricsValuesInner`](./models/post-business-metrics-values-inner.ts)[]<a id="values-postbusinessmetricsvaluesinnermodelspost-business-metrics-values-innerts"></a>

The dates and amounts for the BusinessMetric.

#### 🔄 Return<a id="🔄-return"></a>

[BusinessMetric](./models/business-metric.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/business_metrics` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.businessMetrics.deleteExistingMetric`<a id="vantagebusinessmetricsdeleteexistingmetric"></a>

Deletes an existing BusinessMetric.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteExistingMetricResponse =
  await vantage.businessMetrics.deleteExistingMetric({
    businessMetricToken: "businessMetricToken_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### businessMetricToken: `string`<a id="businessmetrictoken-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[BusinessMetric](./models/business-metric.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/business_metrics/{business_metric_token}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.businessMetrics.getAllMetrics`<a id="vantagebusinessmetricsgetallmetrics"></a>

Return all Business Metrics that the current API token has access to.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllMetricsResponse = await vantage.businessMetrics.getAllMetrics({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

The page of results to return.

##### limit: `number`<a id="limit-number"></a>

The amount of results to return. The maximum is 1000.

#### 🔄 Return<a id="🔄-return"></a>

[BusinessMetrics](./models/business-metrics.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/business_metrics` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.businessMetrics.getMetricById`<a id="vantagebusinessmetricsgetmetricbyid"></a>

Return a specific Business Metric.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMetricByIdResponse = await vantage.businessMetrics.getMetricById({
  businessMetricToken: "businessMetricToken_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### businessMetricToken: `string`<a id="businessmetrictoken-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[BusinessMetric](./models/business-metric.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/business_metrics/{business_metric_token}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.businessMetrics.updateExistingMetric`<a id="vantagebusinessmetricsupdateexistingmetric"></a>

Updates an existing BusinessMetric.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateExistingMetricResponse =
  await vantage.businessMetrics.updateExistingMetric({
    businessMetricToken: "businessMetricToken_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### businessMetricToken: `string`<a id="businessmetrictoken-string"></a>

##### title: `string`<a id="title-string"></a>

The title of the BusinessMetric.

##### cost_report_tokens_with_metadata: [`PutBusinessMetricsCostReportTokensWithMetadataInner`](./models/put-business-metrics-cost-report-tokens-with-metadata-inner.ts)[]<a id="cost_report_tokens_with_metadata-putbusinessmetricscostreporttokenswithmetadatainnermodelsput-business-metrics-cost-report-tokens-with-metadata-innerts"></a>

The tokens for any CostReports that use the BusinessMetric, and the unit scale.

##### values: [`PostBusinessMetricsValuesInner`](./models/post-business-metrics-values-inner.ts)[]<a id="values-postbusinessmetricsvaluesinnermodelspost-business-metrics-values-innerts"></a>

The dates and amounts for the BusinessMetric.

#### 🔄 Return<a id="🔄-return"></a>

[BusinessMetric](./models/business-metric.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/business_metrics/{business_metric_token}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.businessMetrics.updateValuesCsv`<a id="vantagebusinessmetricsupdatevaluescsv"></a>

Updates the values for an existing BusinessMetric from a CSV file.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateValuesCsvResponse = await vantage.businessMetrics.updateValuesCsv({
  businessMetricToken: "businessMetricToken_example",
  csv: fs.readFileSync("/path/to/file"),
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### businessMetricToken: `string`<a id="businessmetrictoken-string"></a>

##### csv: `Uint8Array | File | buffer.File`<a id="csv-uint8array--file--bufferfile"></a>

CSV file containing BusinessMetric dates and amounts

#### 🔄 Return<a id="🔄-return"></a>

[BusinessMetric](./models/business-metric.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/business_metrics/{business_metric_token}/values.csv` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.costs.createDashboard`<a id="vantagecostscreatedashboard"></a>

Create a Dashboard.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createDashboardResponse = await vantage.costs.createDashboard({
  title: "title_example",
  date_bin: "cumulative",
  date_interval: "this_month",
  end_date: "end_date_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### title: `string`<a id="title-string"></a>

The title of the Dashboard.

##### end_date: `string`<a id="end_date-string"></a>

The end date for the date range for costs in the Dashboard. ISO 8601 Formatted. Incompatible with \\\'date_interval\\\' parameter.

##### widget_tokens: `string`[]<a id="widget_tokens-string"></a>

The tokens of the widgets to add to the Dashboard. Currently only supports CostReport tokens.

##### saved_filter_tokens: `string`[]<a id="saved_filter_tokens-string"></a>

The tokens of the Saved Filters used in the Dashboard.

##### date_bin: `string`<a id="date_bin-string"></a>

Determines how to group costs in the Dashboard.

##### date_interval: `string`<a id="date_interval-string"></a>

Determines the date range in the Dashboard. Incompatible with \\\'start_date\\\' and \\\'end_date\\\' parameters.

##### start_date: `string`<a id="start_date-string"></a>

The start date for the date range for costs in the Dashboard. ISO 8601 Formatted. Incompatible with \\\'date_interval\\\' parameter.

##### workspace_token: `string`<a id="workspace_token-string"></a>

The token of the Workspace to add the Dashboard to. Required if the API token is associated with multiple Workspaces.

#### 🔄 Return<a id="🔄-return"></a>

[Dashboard](./models/dashboard.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/dashboards` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.costs.createReport`<a id="vantagecostscreatereport"></a>

Create a CostReport.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createReportResponse = await vantage.costs.createReport({
  title: "title_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### title: `string`<a id="title-string"></a>

The title of the CostReport.

##### workspace_token: `string`<a id="workspace_token-string"></a>

The token of the Workspace to add the Cost Report to. Ignored if \\\'folder_token\\\' is set. Required if the API token is associated with multiple Workspaces.

##### groupings: `string`<a id="groupings-string"></a>

Grouping values for aggregating costs on the report. Valid groupings: account_id, billing_account_id, charge_type, cost_category, cost_subcategory, provider, region, resource_id, service, tagged, tag:<tag_value>. If providing multiple groupings, join as comma separated values: groupings=provider,service,region

##### filter: `string`<a id="filter-string"></a>

The filter query language to apply to the CostReport. Additional documentation available at https://docs.vantage.sh/vql.

##### saved_filter_tokens: `string`[]<a id="saved_filter_tokens-string"></a>

The tokens of the SavedFilters to apply to the CostReport.

##### business_metric_tokens_with_metadata: [`PostCostReportsBusinessMetricTokensWithMetadataInner`](./models/post-cost-reports-business-metric-tokens-with-metadata-inner.ts)[]<a id="business_metric_tokens_with_metadata-postcostreportsbusinessmetrictokenswithmetadatainnermodelspost-cost-reports-business-metric-tokens-with-metadata-innerts"></a>

The tokens for any BusinessMetrics to attach to the CostReport, and the unit scale.

##### folder_token: `string`<a id="folder_token-string"></a>

The token of the Folder to add the CostReport to. Determines the Workspace the report is assigned to.

##### settings: [`PostCostReportsSettings`](./models/post-cost-reports-settings.ts)<a id="settings-postcostreportssettingsmodelspost-cost-reports-settingsts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[CostReport](./models/cost-report.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cost_reports` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.costs.deleteCostReport`<a id="vantagecostsdeletecostreport"></a>

Delete a CostReport.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteCostReportResponse = await vantage.costs.deleteCostReport({
  costReportToken: "costReportToken_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### costReportToken: `string`<a id="costreporttoken-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[CostReport](./models/cost-report.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cost_reports/{cost_report_token}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.costs.deleteDashboard`<a id="vantagecostsdeletedashboard"></a>

Delete a Dashboard.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteDashboardResponse = await vantage.costs.deleteDashboard({
  dashboardToken: "dashboardToken_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### dashboardToken: `string`<a id="dashboardtoken-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Dashboard](./models/dashboard.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/dashboards/{dashboard_token}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.costs.getAll`<a id="vantagecostsgetall"></a>

Return all Dashboards.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllResponse = await vantage.costs.getAll({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

The page of results to return.

##### limit: `number`<a id="limit-number"></a>

The amount of results to return. The maximum is 1000.

#### 🔄 Return<a id="🔄-return"></a>

[Dashboards](./models/dashboards.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/dashboards` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.costs.getAllCostReports`<a id="vantagecostsgetallcostreports"></a>

Return all CostReports.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllCostReportsResponse = await vantage.costs.getAllCostReports({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

The page of results to return.

##### limit: `number`<a id="limit-number"></a>

The amount of results to return. The maximum is 1000.

#### 🔄 Return<a id="🔄-return"></a>

[CostReports](./models/cost-reports.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cost_reports` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.costs.getCostReport`<a id="vantagecostsgetcostreport"></a>

Return a CostReport.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCostReportResponse = await vantage.costs.getCostReport({
  costReportToken: "costReportToken_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### costReportToken: `string`<a id="costreporttoken-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[CostReport](./models/cost-report.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cost_reports/{cost_report_token}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.costs.getSpecificDashboard`<a id="vantagecostsgetspecificdashboard"></a>

Return a specific Dashboard.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpecificDashboardResponse = await vantage.costs.getSpecificDashboard({
  dashboardToken: "dashboardToken_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### dashboardToken: `string`<a id="dashboardtoken-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Dashboard](./models/dashboard.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/dashboards/{dashboard_token}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.costs.listCostReport`<a id="vantagecostslistcostreport"></a>

Return all Costs for a CostReport.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCostReportResponse = await vantage.costs.listCostReport({
  costReportToken: "costReportToken_example",
  order: "desc",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### costReportToken: `string`<a id="costreporttoken-string"></a>

The CostReport token.

##### startDate: `string`<a id="startdate-string"></a>

First date you would like to filter costs from. ISO 8601 formatted.

##### endDate: `string`<a id="enddate-string"></a>

Last date you would like to filter costs to. ISO 8601 formatted.

##### groupings: `string`[]<a id="groupings-string"></a>

Group the results by specific field(s). Defaults to provider, service, account_id. Valid groupings: account_id, billing_account_id, charge_type, cost_category, cost_subcategory, provider, region, resource_id, service, tagged, tag:<tag_value>. If providing multiple groupings, join as comma separated values: groupings=provider,service,region

##### order: `'asc' | 'desc'`<a id="order-asc--desc"></a>

Whether to order costs by date in an ascending or descending manner.

##### limit: `number`<a id="limit-number"></a>

The amount of results to return. The maximum is 1000.

#### 🔄 Return<a id="🔄-return"></a>

[Costs](./models/costs.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/costs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.costs.updateDashboard`<a id="vantagecostsupdatedashboard"></a>

Update a Dashboard.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateDashboardResponse = await vantage.costs.updateDashboard({
  dashboardToken: "dashboardToken_example",
  date_bin: "cumulative",
  date_interval: "this_month",
  end_date: "end_date_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### end_date: `string`<a id="end_date-string"></a>

The end date for the date range for costs in the Dashboard. ISO 8601 Formatted. Incompatible with \\\'date_interval\\\' parameter.

##### dashboardToken: `string`<a id="dashboardtoken-string"></a>

##### title: `string`<a id="title-string"></a>

The title of the Dashboard.

##### widget_tokens: `string`[]<a id="widget_tokens-string"></a>

The tokens of the widgets to add to the Dashboard. Currently only supports CostReport tokens.

##### saved_filter_tokens: `string`[]<a id="saved_filter_tokens-string"></a>

The tokens of the Saved Filters used in the Dashboard.

##### date_bin: `string`<a id="date_bin-string"></a>

Determines how to group costs in the Dashboard.

##### date_interval: `string`<a id="date_interval-string"></a>

Determines the date range in the Dashboard. Incompatible with \\\'start_date\\\' and \\\'end_date\\\' parameters.

##### start_date: `string`<a id="start_date-string"></a>

The start date for the date range for costs in the Dashboard. ISO 8601 Formatted. Incompatible with \\\'date_interval\\\' parameter.

#### 🔄 Return<a id="🔄-return"></a>

[Dashboard](./models/dashboard.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/dashboards/{dashboard_token}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.costs.updateReport`<a id="vantagecostsupdatereport"></a>

Update a CostReport.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateReportResponse = await vantage.costs.updateReport({
  costReportToken: "costReportToken_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### costReportToken: `string`<a id="costreporttoken-string"></a>

##### title: `string`<a id="title-string"></a>

The title of the CostReport.

##### groupings: `string`<a id="groupings-string"></a>

Grouping values for aggregating costs on the report. Valid groupings: account_id, billing_account_id, charge_type, cost_category, cost_subcategory, provider, region, resource_id, service, tagged, tag:<tag_value>. If providing multiple groupings, join as comma separated values: groupings=provider,service,region

##### filter: `string`<a id="filter-string"></a>

The filter query language to apply to the CostReport. Additional documentation available at https://docs.vantage.sh/vql.

##### saved_filter_tokens: `string`[]<a id="saved_filter_tokens-string"></a>

The tokens of the SavedFilters to apply to the CostReport.

##### business_metric_tokens_with_metadata: [`PutCostReportsBusinessMetricTokensWithMetadataInner`](./models/put-cost-reports-business-metric-tokens-with-metadata-inner.ts)[]<a id="business_metric_tokens_with_metadata-putcostreportsbusinessmetrictokenswithmetadatainnermodelsput-cost-reports-business-metric-tokens-with-metadata-innerts"></a>

The tokens for any BusinessMetrics to attach to the CostReport, and the unit scale.

##### folder_token: `string`<a id="folder_token-string"></a>

The token of the Folder to add the CostReport to. Determines the Workspace the report is assigned to.

##### settings: [`PutCostReportsSettings`](./models/put-cost-reports-settings.ts)<a id="settings-putcostreportssettingsmodelsput-cost-reports-settingsts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[CostReport](./models/cost-report.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/cost_reports/{cost_report_token}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.dashboards.createDashboard`<a id="vantagedashboardscreatedashboard"></a>

Create a Dashboard.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createDashboardResponse = await vantage.dashboards.createDashboard({
  title: "title_example",
  date_bin: "cumulative",
  date_interval: "this_month",
  end_date: "end_date_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### title: `string`<a id="title-string"></a>

The title of the Dashboard.

##### end_date: `string`<a id="end_date-string"></a>

The end date for the date range for costs in the Dashboard. ISO 8601 Formatted. Incompatible with \\\'date_interval\\\' parameter.

##### widget_tokens: `string`[]<a id="widget_tokens-string"></a>

The tokens of the widgets to add to the Dashboard. Currently only supports CostReport tokens.

##### saved_filter_tokens: `string`[]<a id="saved_filter_tokens-string"></a>

The tokens of the Saved Filters used in the Dashboard.

##### date_bin: `string`<a id="date_bin-string"></a>

Determines how to group costs in the Dashboard.

##### date_interval: `string`<a id="date_interval-string"></a>

Determines the date range in the Dashboard. Incompatible with \\\'start_date\\\' and \\\'end_date\\\' parameters.

##### start_date: `string`<a id="start_date-string"></a>

The start date for the date range for costs in the Dashboard. ISO 8601 Formatted. Incompatible with \\\'date_interval\\\' parameter.

##### workspace_token: `string`<a id="workspace_token-string"></a>

The token of the Workspace to add the Dashboard to. Required if the API token is associated with multiple Workspaces.

#### 🔄 Return<a id="🔄-return"></a>

[Dashboard](./models/dashboard.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/dashboards` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.dashboards.deleteDashboard`<a id="vantagedashboardsdeletedashboard"></a>

Delete a Dashboard.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteDashboardResponse = await vantage.dashboards.deleteDashboard({
  dashboardToken: "dashboardToken_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### dashboardToken: `string`<a id="dashboardtoken-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Dashboard](./models/dashboard.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/dashboards/{dashboard_token}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.dashboards.getAll`<a id="vantagedashboardsgetall"></a>

Return all Dashboards.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllResponse = await vantage.dashboards.getAll({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

The page of results to return.

##### limit: `number`<a id="limit-number"></a>

The amount of results to return. The maximum is 1000.

#### 🔄 Return<a id="🔄-return"></a>

[Dashboards](./models/dashboards.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/dashboards` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.dashboards.getSpecificDashboard`<a id="vantagedashboardsgetspecificdashboard"></a>

Return a specific Dashboard.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpecificDashboardResponse =
  await vantage.dashboards.getSpecificDashboard({
    dashboardToken: "dashboardToken_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### dashboardToken: `string`<a id="dashboardtoken-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Dashboard](./models/dashboard.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/dashboards/{dashboard_token}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.dashboards.updateDashboard`<a id="vantagedashboardsupdatedashboard"></a>

Update a Dashboard.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateDashboardResponse = await vantage.dashboards.updateDashboard({
  dashboardToken: "dashboardToken_example",
  date_bin: "cumulative",
  date_interval: "this_month",
  end_date: "end_date_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### end_date: `string`<a id="end_date-string"></a>

The end date for the date range for costs in the Dashboard. ISO 8601 Formatted. Incompatible with \\\'date_interval\\\' parameter.

##### dashboardToken: `string`<a id="dashboardtoken-string"></a>

##### title: `string`<a id="title-string"></a>

The title of the Dashboard.

##### widget_tokens: `string`[]<a id="widget_tokens-string"></a>

The tokens of the widgets to add to the Dashboard. Currently only supports CostReport tokens.

##### saved_filter_tokens: `string`[]<a id="saved_filter_tokens-string"></a>

The tokens of the Saved Filters used in the Dashboard.

##### date_bin: `string`<a id="date_bin-string"></a>

Determines how to group costs in the Dashboard.

##### date_interval: `string`<a id="date_interval-string"></a>

Determines the date range in the Dashboard. Incompatible with \\\'start_date\\\' and \\\'end_date\\\' parameters.

##### start_date: `string`<a id="start_date-string"></a>

The start date for the date range for costs in the Dashboard. ISO 8601 Formatted. Incompatible with \\\'date_interval\\\' parameter.

#### 🔄 Return<a id="🔄-return"></a>

[Dashboard](./models/dashboard.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/dashboards/{dashboard_token}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.filters.createSavedFilterForCostReports`<a id="vantagefilterscreatesavedfilterforcostreports"></a>

Create a SavedFilter for CostReports.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createSavedFilterForCostReportsResponse =
  await vantage.filters.createSavedFilterForCostReports({
    title: "title_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### title: `string`<a id="title-string"></a>

The title of the SavedFilter.

##### workspace_token: `string`<a id="workspace_token-string"></a>

The Workspace to associate the SavedFilter with. Required if the API token is associated with multiple Workspaces.

##### filter: `string`<a id="filter-string"></a>

The filter query language to apply to the SavedFilter, which subsequently gets applied to a CostReport. Additional documentation available at https://docs.vantage.sh/vql.

#### 🔄 Return<a id="🔄-return"></a>

[SavedFilter](./models/saved-filter.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/saved_filters` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.filters.deleteSavedFilter`<a id="vantagefiltersdeletesavedfilter"></a>

Delete a SavedFilter for CostReports.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteSavedFilterResponse = await vantage.filters.deleteSavedFilter({
  savedFilterToken: "savedFilterToken_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### savedFilterToken: `string`<a id="savedfiltertoken-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[SavedFilter](./models/saved-filter.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/saved_filters/{saved_filter_token}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.filters.getCostReportFilters`<a id="vantagefiltersgetcostreportfilters"></a>

Return all SavedFilters that can be applied to a CostReport.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCostReportFiltersResponse = await vantage.filters.getCostReportFilters(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

The page of results to return.

##### limit: `number`<a id="limit-number"></a>

The amount of results to return. The maximum is 1000.

#### 🔄 Return<a id="🔄-return"></a>

[SavedFilters](./models/saved-filters.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/saved_filters` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.filters.getSavedFilter`<a id="vantagefiltersgetsavedfilter"></a>

Return a specific SavedFilter.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSavedFilterResponse = await vantage.filters.getSavedFilter({
  savedFilterToken: "savedFilterToken_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### savedFilterToken: `string`<a id="savedfiltertoken-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[SavedFilter](./models/saved-filter.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/saved_filters/{saved_filter_token}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.filters.updateSavedFilterForCostReports`<a id="vantagefiltersupdatesavedfilterforcostreports"></a>

Update a SavedFilter for CostReports.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateSavedFilterForCostReportsResponse =
  await vantage.filters.updateSavedFilterForCostReports({
    savedFilterToken: "savedFilterToken_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### savedFilterToken: `string`<a id="savedfiltertoken-string"></a>

##### title: `string`<a id="title-string"></a>

The title of the SavedFilter.

##### filter: `string`<a id="filter-string"></a>

The filter query language to apply to the SavedFilter, which subsequently gets applied to a CostReport. Additional documentation available at https://docs.vantage.sh/vql.

#### 🔄 Return<a id="🔄-return"></a>

[SavedFilter](./models/saved-filter.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/saved_filters/{saved_filter_token}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.folders.createFolderForCostReports`<a id="vantagefolderscreatefolderforcostreports"></a>

Create a Folder for CostReports.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createFolderForCostReportsResponse =
  await vantage.folders.createFolderForCostReports({
    title: "title_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### title: `string`<a id="title-string"></a>

The title of the Folder.

##### parent_folder_token: `string`<a id="parent_folder_token-string"></a>

The token of the parent Folder.

##### saved_filter_tokens: `string`[]<a id="saved_filter_tokens-string"></a>

The tokens of the SavedFilters to apply to any Cost Report contained within the Folder.

##### workspace_token: `string`<a id="workspace_token-string"></a>

The token of the Workspace to add the Folder to. Ignored if \\\'parent_folder_token\\\' is set. Required if the API token is associated with multiple Workspaces.

#### 🔄 Return<a id="🔄-return"></a>

[Folder](./models/folder.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/folders` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.folders.deleteFolderForCostReports`<a id="vantagefoldersdeletefolderforcostreports"></a>

Delete a Folder for CostReports.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteFolderForCostReportsResponse =
  await vantage.folders.deleteFolderForCostReports({
    folderToken: "folderToken_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### folderToken: `string`<a id="foldertoken-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Folder](./models/folder.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/folders/{folder_token}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.folders.getSpecificFolder`<a id="vantagefoldersgetspecificfolder"></a>

Return a specific Folder for CostReports.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpecificFolderResponse = await vantage.folders.getSpecificFolder({
  folderToken: "folderToken_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### folderToken: `string`<a id="foldertoken-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Folder](./models/folder.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/folders/{folder_token}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.folders.listCostReports`<a id="vantagefolderslistcostreports"></a>

Return all Folders for CostReports.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCostReportsResponse = await vantage.folders.listCostReports({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

The page of results to return.

##### limit: `number`<a id="limit-number"></a>

The amount of results to return. The maximum is 1000.

#### 🔄 Return<a id="🔄-return"></a>

[Folders](./models/folders.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/folders` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.folders.updateFolderForCostReports`<a id="vantagefoldersupdatefolderforcostreports"></a>

Update a Folder for CostReports.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateFolderForCostReportsResponse =
  await vantage.folders.updateFolderForCostReports({
    folderToken: "folderToken_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### folderToken: `string`<a id="foldertoken-string"></a>

##### title: `string`<a id="title-string"></a>

The title of the Folder.

##### parent_folder_token: `string`<a id="parent_folder_token-string"></a>

The token of the parent Folder.

##### saved_filter_tokens: `string`[]<a id="saved_filter_tokens-string"></a>

The tokens of the SavedFilters to apply to any Cost Report contained within the Folder.

#### 🔄 Return<a id="🔄-return"></a>

[Folder](./models/folder.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/folders/{folder_token}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.notifications.createReportNotification`<a id="vantagenotificationscreatereportnotification"></a>

Create a ReportNotification.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createReportNotificationResponse =
  await vantage.notifications.createReportNotification({
    title: "title_example",
    cost_report_token: "cost_report_token_example",
    frequency: "frequency_example",
    change: "change_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### title: `string`<a id="title-string"></a>

The title of the ReportNotification.

##### cost_report_token: `string`<a id="cost_report_token-string"></a>

The CostReport token.

##### frequency: `string`<a id="frequency-string"></a>

The frequency the ReportNotification is sent. Possible values: daily, weekly, monthly.

##### change: `string`<a id="change-string"></a>

The type of change the ReportNotification is tracking. Possible values: percentage, dollars.

##### workspace_token: `string`<a id="workspace_token-string"></a>

The token of the Workspace to add the ReportNotification to. Required if the API token is associated with multiple Workspaces.

##### user_tokens: `string`[]<a id="user_tokens-string"></a>

The Users that receive the notification.

##### recipient_channels: `string`[]<a id="recipient_channels-string"></a>

The Slack or Microsoft Teams channels that receive the notification.

#### 🔄 Return<a id="🔄-return"></a>

[ReportNotification](./models/report-notification.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/report_notifications` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.notifications.deleteReportNotification`<a id="vantagenotificationsdeletereportnotification"></a>

Delete a ReportNotification.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteReportNotificationResponse =
  await vantage.notifications.deleteReportNotification({
    reportNotificationToken: "reportNotificationToken_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### reportNotificationToken: `string`<a id="reportnotificationtoken-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ReportNotification](./models/report-notification.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/report_notifications/{report_notification_token}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.notifications.getAllReportNotifications`<a id="vantagenotificationsgetallreportnotifications"></a>

Return all ReportNotifications.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllReportNotificationsResponse =
  await vantage.notifications.getAllReportNotifications({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

The page of results to return.

##### limit: `number`<a id="limit-number"></a>

The amount of results to return. The maximum is 1000.

#### 🔄 Return<a id="🔄-return"></a>

[ReportNotifications](./models/report-notifications.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/report_notifications` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.notifications.getReportNotification`<a id="vantagenotificationsgetreportnotification"></a>

Return a ReportNotification.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getReportNotificationResponse =
  await vantage.notifications.getReportNotification({
    reportNotificationToken: "reportNotificationToken_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### reportNotificationToken: `string`<a id="reportnotificationtoken-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ReportNotification](./models/report-notification.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/report_notifications/{report_notification_token}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.notifications.updateReportNotification`<a id="vantagenotificationsupdatereportnotification"></a>

Update a ReportNotification.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateReportNotificationResponse =
  await vantage.notifications.updateReportNotification({
    reportNotificationToken: "reportNotificationToken_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### reportNotificationToken: `string`<a id="reportnotificationtoken-string"></a>

##### title: `string`<a id="title-string"></a>

The title of the ReportNotification.

##### cost_report_token: `string`<a id="cost_report_token-string"></a>

The CostReport token.

##### user_tokens: `string`[]<a id="user_tokens-string"></a>

The Users that receive the notification.

##### recipient_channels: `string`[]<a id="recipient_channels-string"></a>

The Slack or Microsoft Teams channels that receive the notification.

##### frequency: `string`<a id="frequency-string"></a>

The frequency the ReportNotification is sent. Possible values: daily, weekly, monthly.

##### change: `string`<a id="change-string"></a>

The type of change the ReportNotification is tracking. Possible values: percentage, dollars.

#### 🔄 Return<a id="🔄-return"></a>

[ReportNotification](./models/report-notification.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/report_notifications/{report_notification_token}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.ping.healthCheck`<a id="vantagepinghealthcheck"></a>

This is a health check endpoint that can be used to determine Vantage API healthiness. It will return 200 if everything is running smoothly.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const healthCheckResponse = await vantage.ping.healthCheck();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ping` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.prices.getProduct`<a id="vantagepricesgetproduct"></a>

Return a product

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getProductResponse = await vantage.prices.getProduct({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Product](./models/product.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/products/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.prices.getProductPrice`<a id="vantagepricesgetproductprice"></a>

Returns a price

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getProductPriceResponse = await vantage.prices.getProductPrice({
  productId: "productId_example",
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### productId: `string`<a id="productid-string"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Price](./models/price.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/products/{product_id}/prices/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.prices.getProductPrices`<a id="vantagepricesgetproductprices"></a>

Return available Prices across all Regions for a Product.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getProductPricesResponse = await vantage.prices.getProductPrices({
  productId: "productId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### productId: `string`<a id="productid-string"></a>

##### page: `number`<a id="page-number"></a>

The page of results to return.

##### limit: `number`<a id="limit-number"></a>

The amount of results to return. The maximum is 1000

#### 🔄 Return<a id="🔄-return"></a>

[Prices](./models/prices.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/products/{product_id}/prices` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.prices.listAvailableProducts`<a id="vantagepriceslistavailableproducts"></a>

Return available Products for a Service. For example, with a Provider of AWS and a Service of EC2, Products will be a list of all EC2 Instances. By default, this endpoint returns all Products across all Services and Providers but has optional query parameters for filtering listed below.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAvailableProductsResponse =
  await vantage.prices.listAvailableProducts({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### providerId: `string`<a id="providerid-string"></a>

Query by Provider to list all Products across all Services for a Provider. e.g. aws

##### serviceId: `string`<a id="serviceid-string"></a>

Query by Service to list all Products for a specific provider service. e.g. aws-ec2

##### name: `string`<a id="name-string"></a>

Query by name of the Product to see a list of products which match that name. e.g. m5a.16xlarge

##### page: `number`<a id="page-number"></a>

The page of results to return.

##### limit: `number`<a id="limit-number"></a>

The amount of results to return. The maximum is 1000

#### 🔄 Return<a id="🔄-return"></a>

[Products](./models/products.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/products` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.segments.createSegment`<a id="vantagesegmentscreatesegment"></a>

Create a Segment.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createSegmentResponse = await vantage.segments.createSegment({
  title: "title_example",
  track_unallocated: false,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### title: `string`<a id="title-string"></a>

The title of the Segment.

##### description: `string`<a id="description-string"></a>

The description of the Segment.

##### priority: `number`<a id="priority-number"></a>

The priority of the Segment.

##### track_unallocated: `boolean`<a id="track_unallocated-boolean"></a>

Track Unallocated Costs which are not assigned to any of the created Segments.

##### report_settings: [`PostSegmentsReportSettings`](./models/post-segments-report-settings.ts)<a id="report_settings-postsegmentsreportsettingsmodelspost-segments-report-settingsts"></a>

##### workspace_token: `string`<a id="workspace_token-string"></a>

The token of the Workspace to add the Segment to. Ignored if \\\'segment_token\\\' is set. Required if the API token is associated with multiple Workspaces.

##### filter: `string`<a id="filter-string"></a>

The filter query language to apply to the Segment. Additional documentation available at https://docs.vantage.sh/vql.

##### parent_segment_token: `string`<a id="parent_segment_token-string"></a>

The token of the parent Segment this new Segment belongs to. Determines the Workspace the segment is assigned to.

#### 🔄 Return<a id="🔄-return"></a>

[Segment](./models/segment.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/segments` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.segments.getSegmentById`<a id="vantagesegmentsgetsegmentbyid"></a>

Return a Segment.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSegmentByIdResponse = await vantage.segments.getSegmentById({
  segmentToken: "segmentToken_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### segmentToken: `string`<a id="segmenttoken-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Segment](./models/segment.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/segments/{segment_token}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.segments.list`<a id="vantagesegmentslist"></a>

Return all Segments.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await vantage.segments.list({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

The page of results to return.

##### limit: `number`<a id="limit-number"></a>

The amount of results to return. The maximum is 1000.

#### 🔄 Return<a id="🔄-return"></a>

[Segments](./models/segments.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/segments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.segments.removeSegment`<a id="vantagesegmentsremovesegment"></a>

Delete a Segment.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeSegmentResponse = await vantage.segments.removeSegment({
  segmentToken: "segmentToken_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### segmentToken: `string`<a id="segmenttoken-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Segment](./models/segment.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/segments/{segment_token}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.segments.updateSegmentById`<a id="vantagesegmentsupdatesegmentbyid"></a>

Update a Segment.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateSegmentByIdResponse = await vantage.segments.updateSegmentById({
  segmentToken: "segmentToken_example",
  track_unallocated: false,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### segmentToken: `string`<a id="segmenttoken-string"></a>

##### title: `string`<a id="title-string"></a>

The title of the Segment.

##### description: `string`<a id="description-string"></a>

The description of the Segment.

##### priority: `number`<a id="priority-number"></a>

The priority of the Segment.

##### track_unallocated: `boolean`<a id="track_unallocated-boolean"></a>

Track Unallocated Costs which are not assigned to any of the created Segments.

##### report_settings: [`PostSegmentsReportSettings`](./models/post-segments-report-settings.ts)<a id="report_settings-postsegmentsreportsettingsmodelspost-segments-report-settingsts"></a>

##### filter: `string`<a id="filter-string"></a>

The filter query language to apply to the Segment. Additional documentation available at https://docs.vantage.sh/vql.

##### parent_segment_token: `string`<a id="parent_segment_token-string"></a>

The token of the parent Segment this new Segment belongs to. Determines the Workspace the segment is assigned to.

#### 🔄 Return<a id="🔄-return"></a>

[Segment](./models/segment.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/segments/{segment_token}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.teams.createNewTeam`<a id="vantageteamscreatenewteam"></a>

Create a new Team.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewTeamResponse = await vantage.teams.createNewTeam({
  name: "name_example",
  role: "owner",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name of the Team.

##### description: `string`<a id="description-string"></a>

The description of the Team.

##### workspace_tokens: `string`[]<a id="workspace_tokens-string"></a>

The Workspace tokens to associate to the Team.

##### user_tokens: `string`[]<a id="user_tokens-string"></a>

The User tokens to associate to the Team.

##### user_emails: `string`[]<a id="user_emails-string"></a>

The User emails to associate to the Team.

##### role: `string`<a id="role-string"></a>

The role to assign to the provided Users. Defaults to \\\'editor\\\' which has editor permissions.

#### 🔄 Return<a id="🔄-return"></a>

[Team](./models/team.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.teams.getSpecificTeam`<a id="vantageteamsgetspecificteam"></a>

Return a specific Team.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpecificTeamResponse = await vantage.teams.getSpecificTeam({
  teamToken: "teamToken_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teamToken: `string`<a id="teamtoken-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Team](./models/team.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{team_token}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.teams.listAccessible`<a id="vantageteamslistaccessible"></a>

Return all Teams that the current API token has access to.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAccessibleResponse = await vantage.teams.listAccessible({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

The page of results to return.

##### limit: `number`<a id="limit-number"></a>

The amount of results to return. The maximum is 1000.

#### 🔄 Return<a id="🔄-return"></a>

[Teams](./models/teams.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.teams.removeTeam`<a id="vantageteamsremoveteam"></a>

Delete a Team.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeTeamResponse = await vantage.teams.removeTeam({
  teamToken: "teamToken_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teamToken: `string`<a id="teamtoken-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Team](./models/team.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{team_token}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.teams.updateTeam`<a id="vantageteamsupdateteam"></a>

Update a Team.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateTeamResponse = await vantage.teams.updateTeam({
  teamToken: "teamToken_example",
  role: "owner",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teamToken: `string`<a id="teamtoken-string"></a>

##### description: `string`<a id="description-string"></a>

The description of the Team.

##### name: `string`<a id="name-string"></a>

The name of the Team.

##### workspace_tokens: `string`[]<a id="workspace_tokens-string"></a>

The Workspace tokens to associate to the Team.

##### user_tokens: `string`[]<a id="user_tokens-string"></a>

The User tokens to associate to the Team.

##### user_emails: `string`[]<a id="user_emails-string"></a>

The User emails to associate to the Team.

##### role: `string`<a id="role-string"></a>

The role to assign to the provided Users. Defaults to \\\'editor\\\' which has editor permissions.

#### 🔄 Return<a id="🔄-return"></a>

[Team](./models/team.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{team_token}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.users.getSpecificUser`<a id="vantageusersgetspecificuser"></a>

Return a specific User.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpecificUserResponse = await vantage.users.getSpecificUser({
  userToken: "userToken_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userToken: `string`<a id="usertoken-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_token}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.users.listAccessible`<a id="vantageuserslistaccessible"></a>

Return all Users that the current API token has access to.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAccessibleResponse = await vantage.users.listAccessible({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

The page of results to return.

##### limit: `number`<a id="limit-number"></a>

The amount of results to return. The maximum is 1000.

#### 🔄 Return<a id="🔄-return"></a>

[Users](./models/users.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.workspaces.getSpecificWorkspace`<a id="vantageworkspacesgetspecificworkspace"></a>

Return a specific Workspace.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpecificWorkspaceResponse =
  await vantage.workspaces.getSpecificWorkspace({
    workspaceToken: "workspaceToken_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workspaceToken: `string`<a id="workspacetoken-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Workspace](./models/workspace.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workspaces/{workspace_token}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `vantage.workspaces.listAccessible`<a id="vantageworkspaceslistaccessible"></a>

Return all Workspaces that the current API token has access to.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAccessibleResponse = await vantage.workspaces.listAccessible({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

The page of results to return.

##### limit: `number`<a id="limit-number"></a>

The amount of results to return. The maximum is 1000.

#### 🔄 Return<a id="🔄-return"></a>

[Workspaces](./models/workspaces.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workspaces` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
