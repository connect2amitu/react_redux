import React, { Component } from 'react'

//React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

import { DEFAULT_PAGE_SIZE } from '../config/constants';

export default class ReactDTable extends Component {
  render() {
    const { columns, data, fetchData, defaultPageSize, showPaginationTop, pages, minRows, loading, filterable, freezeWhenExpanded, className, ...rest } = this.props;
    return (
      <ReactTable
        columns={columns}
        data={data}
        onFetchData={fetchData} // Request new data when things change
        pages={typeof pages !== "undefined" ? pages : 0}
        minRows={typeof minRows !== "undefined" ? minRows : 10}
        loading={typeof loading !== "undefined" ? loading : false}
        className={typeof className !== "undefined" ? className : "-striped -highlight"}
        defaultPageSize={typeof defaultPageSize !== "undefined" ? defaultPageSize : DEFAULT_PAGE_SIZE}
        showPaginationTop={typeof showPaginationTop !== "undefined" ? showPaginationTop : false}
        freezeWhenExpanded={typeof freezeWhenExpanded !== "undefined" ? freezeWhenExpanded : true}
        manual
        filterable={typeof filterable !== "undefined" ? filterable : true}
        {...rest}
      />
    )
  }
}
