import React from "react";
import styles from "./BjsDashboard.module.scss";

const BjsDashboard = ({
  profilName = "Hi Amanda!",
  firstPart = "You have       ",
  parcelPendingCount = "2",
  secondPart = "parcels pending.",
  recentOrderTitle = "Your Recent Orders",
  viewAll = "View all",
  tabTitle = "Order Date",
  amount = "Amount",
  status = "Status",
  date = "Oct 13, 2020",
  price = "$6.99",
  packingText = "Packing",
  textLink = "Track Parcel",
  oct132020 = "Oct 13, 2020",
  num1229 = "$12.29",
  inTransitText = "In Transit",
  textLinkTwo = "Track Parcel",
  sept42020 = "Sept 4, 2020",
  num1229Two = "$12.29 ",
  deliveredText = "Delivered",
  viewDetails = "View Details",
  sept42020Two = "Sept 4, 2020",
  num1229Three = "$12.29 ",
  delivered = "Delivered",
  viewDetailsTwo = "View Details",
  sept42020Three = "Sept 4, 2020",
  num1229Four = "$12.29 ",
  deliveredTwo = "Delivered",
  viewDetailsThree = "View Details",
  sept42020Four = "Sept 4, 2020",
  num1229Five = "$12.29 ",
  deliveredThree = "Delivered",
  viewDetailsFour = "View Details",
  topQuestions = "Top Questions",
  yourQuestionHistory = "Your Question History",
  doYouOfferSameDayDelivery = (
    <>
      <strong
        className={
          styles.doYouOfferSameDayDeliveryEmphasis1
        }
      >
        Do you offer{" "}
      </strong>
      Same Day Delivery
      <strong
        className={
          styles.doYouOfferSameDayDeliveryEmphasis1
        }
      >
        ?
      </strong>
    </>
  ),
  iNeedHelpResettingMyPassword = (
    <>
      <strong
        className={
          styles.doYouOfferSameDayDeliveryEmphasis1
        }
      >
        I need help{" "}
      </strong>
      resetting my password
    </>
  ),
  backText = "Back to Menu",
  youveAsked = "You’ve asked:",
  iNeedToEditMyOrder = "&gt; I need to edit my order",
  onceYouClickSubmitOrderOnTheChe = "Once you click &#34;Submit Order&#34; on the Checkout screen, your order has been completed. After that, we cannot guarantee that we will be able to make any changes. <br /> <br /> Please call for more information. We will do our best to assist you.",
  bjsCallAssistance8664257932 = (
    <>
      BJ’s call assistance <br />{" "}
      <strong
        className={
          styles.bjsCallAssistance8664257932Emphasis2
        }
      >
        866-425-7932
      </strong>
    </>
  ),
  wouldYouLikeMeToShowYouHowToCan = (
    <>
      Would you like me to show you how to{" "}
      <strong
        className={
          styles.wouldYouLikeMeToShowYouHowToCancelYourOrderEmphasis2
        }
      >
        cancel your order?
      </strong>
    </>
  ),
  buttonLabel = "Maybe Later",
  yes = "Yes"
}) => {
  return (
    <div className={styles.bjsDashboard}>
      <div className={styles.leftSection}>
        <div className={styles.profileSection}>
          <div className={styles.profileContainer}>
            <div className={styles.profilePicture}>
              <div className={styles.ellipse9} />
              <img
                alt=""
                className={styles.vector}
                src="https://static.overlay-tech.com/assets/cd8ba2d8-6302-49b7-9712-202cfff1e7af.svg"
              />
            </div>
            <div className={styles.profilInfoContainer}>
              <p className={styles.profilName}>
                {profilName}
              </p>
              <div
                className={styles.parcelsPendingContainer}
              >
                <p className={styles.firstPart}>
                  {firstPart}
                </p>
                <div className={styles.parcelsPendingCount}>
                  <p className={styles.parcelPendingCount}>
                    {parcelPendingCount}
                  </p>
                </div>
                <p className={styles.firstPart}>
                  {secondPart}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.profilInfoContainer}>
            <div
              className={styles.recentOrdersTitleContainer}
            >
              <p className={styles.recentOrderTitle}>
                {recentOrderTitle}
              </p>
              <div className={styles.viewAllContainer}>
                <p className={styles.viewAll}>{viewAll}</p>
                <img
                  alt=""
                  className={styles.angleDoubleUp}
                  src="https://static.overlay-tech.com/assets/3094bcf3-b39e-410c-89e0-ca452a1b82b2.svg"
                />
              </div>
            </div>
            <div className={styles.recentOrdersTable}>
              <div className={styles.tableHeadings}>
                <p className={styles.tabTitle}>
                  {tabTitle}
                </p>
                <p className={styles.tabTitle}>{amount}</p>
                <p className={styles.tabTitle}>{status}</p>
              </div>
              <div className={styles.tableRowDelimiter} />
              <div className={styles.tableRow}>
                <p className={styles.date}>{date}</p>
                <p className={styles.price}>{price}</p>
                <div className={styles.packingLabel}>
                  <div className={styles.redDot} />
                  <p className={styles.packingText}>
                    {packingText}
                  </p>
                </div>
                <div className={styles.detailsLink}>
                  <p className={styles.textLink}>
                    {textLink}
                  </p>
                  <img
                    alt=""
                    src="https://static.overlay-tech.com/assets/f5e6afd5-a33c-4141-9f61-dbe7ae9305bf.svg"
                  />
                </div>
              </div>
              <div className={styles.tableRowDelimiter} />
              <div className={styles.tableRow}>
                <p className={styles.date}>{oct132020}</p>
                <p className={styles.price}>{num1229}</p>
                <div className={styles.inTransitLabel}>
                  <div className={styles.orangeDot} />
                  <p className={styles.inTransitText}>
                    {inTransitText}
                  </p>
                </div>
                <div className={styles.detailsLink}>
                  <p className={styles.textLink}>
                    {textLinkTwo}
                  </p>
                  <img
                    alt=""
                    src="https://static.overlay-tech.com/assets/8b42da70-3df6-462d-9685-433fc33415af.svg"
                  />
                </div>
              </div>
              <div className={styles.tableRowDelimiter} />
              <div className={styles.tableRow}>
                <p className={styles.date}>{sept42020}</p>
                <p className={styles.price}>{num1229Two}</p>
                <div className={styles.deliveredLabel}>
                  <div className={styles.greenDot} />
                  <p className={styles.deliveredText}>
                    {deliveredText}
                  </p>
                </div>
                <div className={styles.detailsLink}>
                  <p className={styles.textLink}>
                    {viewDetails}
                  </p>
                  <img
                    alt=""
                    src="https://static.overlay-tech.com/assets/2c76ce92-9055-4322-abfd-8d8caba6cdfe.svg"
                  />
                </div>
              </div>
              <div className={styles.tableRowDelimiter} />
              <div className={styles.tableRow}>
                <p className={styles.date}>
                  {sept42020Two}
                </p>
                <p className={styles.price}>
                  {num1229Three}
                </p>
                <div className={styles.deliveredLabel}>
                  <div className={styles.greenDot} />
                  <p className={styles.deliveredText}>
                    {delivered}
                  </p>
                </div>
                <div className={styles.detailsLink}>
                  <p className={styles.textLink}>
                    {viewDetailsTwo}
                  </p>
                  <img
                    alt=""
                    src="https://static.overlay-tech.com/assets/12d50a15-b1fd-426d-ba5e-21b220f3da49.svg"
                  />
                </div>
              </div>
              <div className={styles.tableRowDelimiter} />
              <div className={styles.tableRow}>
                <p className={styles.date}>
                  {sept42020Three}
                </p>
                <p className={styles.price}>
                  {num1229Four}
                </p>
                <div className={styles.deliveredLabel}>
                  <div className={styles.greenDot} />
                  <p className={styles.deliveredText}>
                    {deliveredTwo}
                  </p>
                </div>
                <div className={styles.detailsLink}>
                  <p className={styles.textLink}>
                    {viewDetailsThree}
                  </p>
                  <img
                    alt=""
                    src="https://static.overlay-tech.com/assets/9d65857c-5f7f-4ac5-9be5-6c731d375dd2.svg"
                  />
                </div>
              </div>
              <div className={styles.tableRowDelimiter} />
              <div className={styles.tableRow}>
                <p className={styles.date}>
                  {sept42020Four}
                </p>
                <p className={styles.price}>
                  {num1229Five}
                </p>
                <div className={styles.deliveredLabel}>
                  <div className={styles.greenDot} />
                  <p className={styles.deliveredText}>
                    {deliveredThree}
                  </p>
                </div>
                <div className={styles.detailsLink}>
                  <p className={styles.textLink}>
                    {viewDetailsFour}
                  </p>
                  <img
                    alt=""
                    src="https://static.overlay-tech.com/assets/27f9f7f2-e747-468e-a42c-6515b72cb57b.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.profileSection}>
          <div className={styles.questionTabs}>
            <p className={styles.topQuestions}>
              {topQuestions}
            </p>
            <p className={styles.yourQuestionHistory}>
              {yourQuestionHistory}
            </p>
          </div>
          <img
            alt=""
            src="https://static.overlay-tech.com/assets/a0799a91-705c-4487-95b8-740a1d2e2e7f.svg"
          />
        </div>
        <div className={styles.group5}>
          <div className={styles.frame3}>
            <div className={styles.questionContainer}>
              <p
                className={styles.doYouOfferSameDayDelivery}
              >
                {doYouOfferSameDayDelivery}
              </p>
            </div>
            <div className={styles.questionContainer}>
              <p
                className={styles.doYouOfferSameDayDelivery}
              >
                {iNeedHelpResettingMyPassword}
              </p>
            </div>
          </div>
          <div className={styles.group4}>
            <div className={styles.carrouselButton}>
              <img
                alt=""
                src="https://static.overlay-tech.com/assets/fbc92de9-e71e-4bb6-b15a-b2be45e8ebc0.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sectionDelimiter} />
      <div className={styles.relativeWrapperOne}>
        <img
          alt=""
          className={styles.closeIconButton}
          src="https://static.overlay-tech.com/assets/6e5319cf-6291-4e2b-8d40-c5e8410d262e.svg"
        />
        <div className={styles.rightSection}>
          <div className={styles.backToMenuContainer}>
            <img
              alt=""
              className={styles.chevronLeft}
              src="https://static.overlay-tech.com/assets/dd40edc2-d341-4b07-b21e-44dbd6ebad52.svg"
            />
            <p className={styles.backText}>{backText}</p>
          </div>
          <div className={styles.profilInfoContainer}>
            <div className={styles.sumupContainer}>
              <div className={styles.askedContainer}>
                <p className={styles.youveAsked}>
                  {youveAsked}
                </p>
                <p className={styles.iNeedToEditMyOrder}>
                  {iNeedToEditMyOrder}
                </p>
              </div>
              <img
                alt=""
                className={styles.line9}
                src="https://static.overlay-tech.com/assets/d0ab6a7f-599c-4f3b-b227-ce783979dd92.svg"
              />
              <div className={styles.profilInfoContainer}>
                <p
                  className={
                    styles.onceYouClickSubmitOrderOnTheChe
                  }
                >
                  {onceYouClickSubmitOrderOnTheChe}
                </p>
                <div className={styles.assistanceContainer}>
                  <div className={styles.phoneButton}>
                    <img
                      alt=""
                      src="https://static.overlay-tech.com/assets/c6c8c935-943b-421f-9683-6f9229cf6271.svg"
                    />
                  </div>
                  <p className={styles.backText}>
                    {bjsCallAssistance8664257932}
                  </p>
                </div>
                <div className={styles.profilInfoContainer}>
                  <p
                    className={
                      styles.wouldYouLikeMeToShowYouHowToCan
                    }
                  >
                    {wouldYouLikeMeToShowYouHowToCan}
                  </p>
                  <div
                    className={styles.orderButtonsContainer}
                  >
                    <button className={styles.redButton}>
                      <p className={styles.buttonLabel}>
                        {buttonLabel}
                      </p>
                    </button>
                    <button className={styles.greenButton}>
                      <p className={styles.buttonLabel}>
                        {yes}
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.orderButtonsContainer}>
              <div className={styles.inputWrapper}>
                <input
                  className={styles.input}
                  placeholder="Tell us your question..."
                />
                <img
                  alt=""
                  className={styles.microphone}
                  src="https://static.overlay-tech.com/assets/d970a47e-e1a3-4806-8ca2-d3b4fe3f33c8.svg"
                />
              </div>
              <button className={styles.sendButton}>
                <img
                  alt=""
                  src="https://static.overlay-tech.com/assets/a8af4ffe-3481-49db-8730-9684fed36766.svg"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BjsDashboard;