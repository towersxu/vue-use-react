import * as React from "react";

/** 券可兑换商品模块。使用页面：券包详情页、购买成功页 */
class ExchangeSpuList extends React.PureComponent {
    shouldComponentUpdate(nextProps) {
      if (nextProps.count > 10) {
        return false
      }
      return true
    }
    render() {
      console.log('ExchangeSpuList render', this.props)
      const { count } = this.props;
      return (
        <div className="exchange-spu-list">
          <span>count: {count}</span>
        </div>
      )
    }
}
export default ExchangeSpuList;