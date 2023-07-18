import { useState } from "react";
import { Switch, SubscriptionCard, PromoCode } from "../components/";
import { PremiumSubscription } from "../assets/data";

const Premium = () => {
    const [active, setActive] = useState(0);

    return (
        <div className="premium-container bg-gradient">
            <div className="banner">
                <h3>Subscription</h3>
                <p>Choose the plan that's right for you</p>
            </div>

            <div className="switch-container top-bar-right">
                <Switch
                    options={["Annual", "Monthly"]}
                    active={active}
                    setActive={setActive}
                />
            </div>

            <div className="premium-cards-wrapper">
                {
                    PremiumSubscription.map(
                        (Subscription) => (
                            <SubscriptionCard
                                title={
                                    Subscription.title
                                }
                                price={
                                    Subscription.price
                                }
                                content={
                                    Subscription.content
                                }
                            />
                        )
                    )
                }
            </div>

            <PromoCode />
        </div>
    )
}

export default Premium;