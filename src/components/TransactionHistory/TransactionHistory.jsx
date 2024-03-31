import PropTypes from "prop-types";
import css from "./TransactionHistory.module.css";

const headerTypes = ["Type", "Amount", "Currency"];

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.table}>
      <thead className={css.thead}>
        <tr className={css.tr}>
          {headerTypes.map((item) => (
            <th key={item} className={css.th}>
              {item}
            </th>
          ))}
        </tr>
      </thead>

      <tbody className={css.tbody}>
        {transactions.map(({ id, type, amount, currency }) => (
          <tr key={id} className={css.tr}>
            <td className={css.td}>{type}</td>
            <td className={css.td}>{amount}</td>
            <td className={css.td}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
export default TransactionHistory;
