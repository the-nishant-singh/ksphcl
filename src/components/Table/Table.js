import classes from './Table.module.css';
import React from 'react';
import NoData from '../../assets/noData.png';
import { get as LodashGet } from 'lodash';
import ReactPaginate from 'react-paginate';

const Table = ({
  data,
  head,
  keys,
  addIndex,
  Pagination = false,
  limit = 30,
  handlePageChange,
  page = 1,
  totalCount = 0
}) => {
  return (
    <div className={classes.Table}>
      <div className={classes.Content}>
        <table>
          <tr className={classes.Header}>{head && head.map(head => <th>{head}</th>)}</tr>
          {data.length ? (
            data.map((row, i) => (
              <tr>
                {addIndex ? <td>{i + 1}</td> : null}
                {keys.map(key => (
                  <td>
                    {typeof LodashGet(row, key) !== 'boolean' ? LodashGet(row, key) : LodashGet(row, key).toString()}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9">
                <div className={classes.NoData}>
                  <div>
                    {' '}
                    <img src={NoData} alt="" />
                  </div>
                  <div>No Records To Display</div>
                </div>
              </td>
            </tr>
          )}
        </table>
      </div>

      <div>
        {Pagination ? (
          <ReactPaginate
            containerClassName="react-pagination"
            forcePage={page}
            pageCount={Math.ceil(totalCount / limit)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={({ selected }) => handlePageChange(selected)}
            nextLabel=">"
            previousLabel="<"
          />
        ) : null}
      </div>
    </div>
  );
};

export default Table;
