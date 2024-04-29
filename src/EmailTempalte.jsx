import React from "react";
import "./EmailTemplate.css";
import logo from "./HotelLogo.png";
import logo2 from "./logo2.jpg";

const EmailTempalte = () => {
  return (
    <div className="EmailTempale-containor">
      <div className="EmailTempale-header">
        <div className="headerLogoPosition">
          <img src={logo} alt="Logo" className="EmailTempaleLogo" />
        </div>
      </div>
      {/* ------------------------First Box -------------------------*/}
      <div className="EmailTempale-body">
        <div>
          <h2 className="EmailTempale-Topic">Reservation Details</h2>
        </div>
        <div className="EmailTempale-container">
          <div>
            <div className="EmailTempale-details-header">Check-In</div>
            <div className="EmailTempale-details">07-May-2024</div>
          </div>
          <div class="EmailTempale-underline"></div>
          <div>
            <div className="EmailTempale-details-header">Check-Out</div>
            <div className="EmailTempale-details">08-May-2024</div>
          </div>
          <div class="EmailTempale-underline"></div>
          <div>
            <div className="EmailTempale-details-header">Booked On</div>
            <div className="EmailTempale-details">10-Apr-2024</div>
          </div>
          <div class="EmailTempale-underline"></div>
          <div>
            <div className="EmailTempale-details-header">
              Booking Confirmation Id
            </div>
            <div className="EmailTempale-details">4844715774</div>
          </div>
        </div>
        <div>
          <h2 className="EmailTempale-Topic">Reservation Remmarks</h2>
          <p className="EmailTempale-TopicDes">
            Collect payment from guests at your property.For cancellation and
            no-show fees,please visit extranet, booker_is_genius.
          </p>
        </div>
        <div className="EmailTempale-container">
          <div>
            <div className="EmailTempale-details-header">Guest Count</div>
            <div className="EmailTempale-details">2 adults</div>
          </div>
          <div class="EmailTempale-underline"></div>
          <div>
            <div className="EmailTempale-details-header">Total Price</div>
            <div className="EmailTempale-details">72.00 GBP</div>
          </div>
          <div class="EmailTempale-underline"></div>
          <div>
            <div className="EmailTempale-details-header">Total Tax Amount</div>
            <div className="EmailTempale-details">12.00 GBP</div>
          </div>
          <div class="EmailTempale-underline"></div>
          <div>
            <div className="EmailTempale-details-header">
              Commission Payable
            </div>
            <div className="EmailTempale-details">10.80 GBP</div>
          </div>
        </div>
      </div>

      {/* ------------------------Seccond Box -------------------------*/}
      <div className="EmailTempale-body">
        <div>
          <h2 className="EmailTempale-Topic">
            ROOM - Double Room with Shared Bathroom -General
          </h2>
        </div>
        <div className="EmailTempale-container">
          <div>
            <div className="EmailTempale-details-header">Check In Date</div>
            <div className="EmailTempale-details">07-May-2024</div>
          </div>
          <div class="EmailTempale-underline"></div>
          <div>
            <div className="EmailTempale-details-header">Check Out Date</div>
            <div className="EmailTempale-details">08-May-2024</div>
          </div>
          <div class="EmailTempale-underline"></div>
          <div>
            <div className="EmailTempale-details-header">Guest</div>
            <div className="EmailTempale-details">Keron Thomas</div>
          </div>
          <div class="EmailTempale-underline"></div>
          <div>
            <div className="EmailTempale-details-header">Guest Count</div>
            <div className="EmailTempale-details">2 adults</div>
          </div>
          <div class="EmailTempale-underline"></div>
          <div>
            <div className="EmailTempale-details-header">Total Price</div>
            <div className="EmailTempale-details">72.00 GBP</div>
          </div>
          <div class="EmailTempale-underline"></div>
          <div>
            <div className="EmailTempale-details-header">Total Tax Amount</div>
            <div className="EmailTempale-details">12.00 GBP</div>
          </div>
          <div class="EmailTempale-underline"></div>
          <div>
            <div className="EmailTempale-details-header">
              Commission Payable
            </div>
            <div className="EmailTempale-details">10.80 GBP</div>
          </div>
          <div class="EmailTempale-underline"></div>
          <div>
            <div className="EmailTempale-details-header">Smoking</div>
            <div className="EmailTempale-details">No</div>
          </div>
          <div class="EmailTempale-underline"></div>
          <div>
            <div className="EmailTempale-details-header">
              Smoking Preference
            </div>
            <div className="EmailTempale-details">Non-Smoking</div>
          </div>
          <div class="EmailTempale-underline"></div>
          <div>
            <div className="EmailTempale-details-header">Breakfast costs</div>
            <div className="EmailTempale-details">
              GBP9.95 per person per night
            </div>
          </div>
        </div>
        <div>
          <h2 className="EmailTempale-Topic">Extra Information</h2>
        </div>
        <div className="EmailTempale-container">
          <div>
            <div className="EmailTempale-details-header-sub">
              Breakfast costs GBP9.95 per person per night.Children and Extra
              Bed Policy: Children of any age are allowed.You havent't added any
              cots.You haven't any extra beds.The maimum number of guests is
              2.Deposit Policy: No prepayment needed.Cancellation Policy: The
              guest can cancel free of charge until 1 day before arrival.Te
              guest will be charged the cost of the first night if they cancel
              within 1 day before arrival.If the guest doesn't show up,they will
              be charged the total price of the reservation.
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------Third Box -------------------------*/}
      <div className="EmailTempale-body">
        <div>
          <h2 className="EmailTempale-Topic">Daily Room Rate Breakdown</h2>
        </div>
        <div className="EmailTempale-container">
          <div>
            <div className="EmailTempale-details-header">Date</div>
            <div className="EmailTempale-details">07-May-2024</div>
          </div>
          <div class="EmailTempale-underline"></div>
          <div>
            <div className="EmailTempale-details-header">Rate Id</div>
            <div className="EmailTempale-details">13515624</div>
          </div>
          <div class="EmailTempale-underline"></div>
          <div>
            <div className="EmailTempale-details-header">Name</div>
            <div className="EmailTempale-details"></div>
          </div>
          <div class="EmailTempale-underline"></div>
          <div>
            <div className="EmailTempale-details-header">Description</div>
            <div className="EmailTempale-details"></div>
          </div>
          <div class="EmailTempale-underline"></div>
          <div>
            <div className="EmailTempale-details-header">Price</div>
            <div className="EmailTempale-details">72.00 GBP</div>
          </div>
          <div class="EmailTempale-underline"></div>
          <div>
            <div className="EmailTempale-details-header">Description</div>
            <div className="EmailTempale-details">VAT (20%)</div>
          </div>
          <div class="EmailTempale-underline"></div>
          <div>
            <div className="EmailTempale-details-header">Tax Amount</div>
            <div className="EmailTempale-details">12.00 GBP</div>
          </div>
          <div class="EmailTempale-underline"></div>
          <div>
            <div className="EmailTempale-details-header">
              Total Booking Cost
            </div>
            <div className="EmailTempale-details">72.00 GBP</div>
          </div>
        </div>
        <div>
          <h2 className="EmailTempale-Topic">Booker Contact Details</h2>
        </div>
        <div className="EmailTempale-container">
          <div>
            <div className="EmailTempale-details-header">Booker Name</div>
            <div className="EmailTempale-details">Thomas,Keron Booker{}</div>
          </div>
          <div class="EmailTempale-underline"></div>
          <div>
            <div className="EmailTempale-details-header">Phone</div>
            <div className="EmailTempale-details">+44 7387 136737</div>
          </div>
          <div class="EmailTempale-underline"></div>
          <div>
            <div className="EmailTempale-details-header">Booker Email</div>
            <div className="EmailTempale-details">
              kthoma.853646@guest.booking.com
            </div>
          </div>
          <div class="EmailTempale-underline"></div>
          <div>
            <div className="EmailTempale-details-header">Booker Address</div>
            <div className="EmailTempale-details">
              First drive, London,United Kingdom
            </div>
          </div>
        </div>
      </div>
      <footer className="EmailTempale-footer">
        <div className="EmailTempale-footerlogo">
          <img src={logo2} alt="Logo" />
        </div>

        <div className="EmailTempale-footer-text-container">
                <h3 className="EmailTempale-footer-title">Address</h3>
                <p className="EmailTempale-footer-address">16 Hillside, London,<br />NW10 8BN,<br />Reception<br /> 020 8961 1260</p>
            </div>
      </footer>
    </div>
  );
};

export default EmailTempalte;
