import SourceHeader from "SourceRoute/Checkout/Checkout.component";
import ProgressBar from "src/ProgressBar/ProgressBar";
import "./Checkout.override.style.scss";

class Checkout extends SourceHeader {
  render() {
    return (
      <React.Fragment>
        <ProgressBar
          titles={["Shipping", "Review & Payments", "Done"]}
          allStages={Object.keys(this.stepMap)}
          currentStage={this.props.checkoutStep}
        />
        {super.render()}
      </React.Fragment>
    );
  }
}

export default Checkout;
