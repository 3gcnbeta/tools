import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-fos',
  templateUrl: './fos.component.html',
  styleUrls: ['./fos.component.scss']
})
export class FosComponent implements OnInit {

  maxDecimal = 4;

  // Free On Board / Freight On Board (FOB)
  freeOnBoard = 0;

  // International Freight (IF)
  internationalFreight = 0;
  internationalFreightRate = 0;

  // International Shipping Insurance
  internationalShippingInsurance = 0;
  internationalShippingInsuranceRate = 0.0

  // COST，INSURANCE，AND FREIGHT (CIF)
  costInsuranceFreight = 0;

  // Bank Finance Rates
  bankFinanceFee = 0;
  bankFinanceRate = 0;

  // Foreign trade fee
  foreignTradeFee = 0;
  foreignTradeFeeRate = 0;

  // tariff
  tariffRate = 0;
  tariff = 0;

  // Consumption tax
  consumptionTaxRate = 0;
  consumptionTax = 0;

  // value added tax
  valueAddedTaxRate = 13;
  valueAddedTax = 0;

  // landed price
  landedPrice = 0;



  constructor() { }

  ngOnInit(): void {
  }


  calc() {
    this.costInsuranceFreight = this.freeOnBoard + this.internationalFreight + this.internationalShippingInsurance;
    this.bankFinanceFee = this.freeOnBoard * this.bankFinanceRate;
    this.foreignTradeFee = this.costInsuranceFreight * this.foreignTradeFeeRate;
    this.tariff = this.costInsuranceFreight * this.tariffRate;
    this.consumptionTax = (this.costInsuranceFreight + this.tariff) *
      this.consumptionTaxRate / (1 - this.consumptionTaxRate);
    this.valueAddedTax = (this.costInsuranceFreight + this.tariff + this.consumptionTaxRate) * this.valueAddedTaxRate;
    this.landedPrice = this.costInsuranceFreight + this.bankFinanceFee + this.foreignTradeFee
      + this.tariff + this.consumptionTax + this.valueAddedTax;

  }

  onFobChange() {
    console.log("on fob change");
    console.log(this.freeOnBoard);

    this.calc();

    this.costInsuranceFreight = this.freeOnBoard + this.internationalFreight + this.internationalShippingInsurance;
    console.log(this.costInsuranceFreight);
  }

  onInternationalFreightRateSliderChange(event: MatSliderChange) {
    console.log("on ifr change");
    console.log(event);
    this.internationalFreightRate = (event.value || 0) / 100;
    this.onInternationalFreightRateChange();
  }


  onInternationalFreightRateChange() {
    console.log("on ifr change 2");
    this.internationalFreight = this.freeOnBoard * this.internationalFreightRate;
    this.calc();
  }


  onInternationalFreightChange() {
    console.log("on ifr change");
    this.calc();
  }

  onInternationalShippingInsuranceRateSliderChange(event: MatSliderChange) {
    console.log("on ifr change");
    console.log(event);
    this.internationalShippingInsuranceRate = (event.value || 0) / 100;
    this.onInternationalShippingInsuranceRateChange();
  }

  onInternationalShippingInsuranceRateChange() {
    this.internationalShippingInsurance = (this.freeOnBoard + this.internationalFreight)
      * this.internationalShippingInsuranceRate / (1 - this.internationalShippingInsuranceRate);
    this.calc();
  }

  onInternationalShippingInsuranceChange() {
    this.calc();
  }

  onBankFinanceRateSliderChange(event: MatSliderChange) {
    this.bankFinanceRate = (event.value || 0) / 100;
    this.onBankFinanceRateChange();
  }

  onBankFinanceRateChange() {
    this.calc();
  }

  onForeignTradeFeeRateSliderChange(event: MatSliderChange) {
    this.foreignTradeFeeRate = (event.value || 0) / 100;
    this.onForeignTradeFeeRateChange();
  }

  onForeignTradeFeeRateChange() {
    this.calc();
  }

  onForeignTradeFeeChange() {
    this.calc();
  }

  onTariffRateSliderChange(event: MatSliderChange) {
    this.tariffRate = (event.value || 0) / 100;
    this.onTariffRateChange();
  }

  onTariffRateChange() {
    this.calc();
  }

  onTariffChange() {
    this.calc();
  }


  onConsumptionTaxRateSliderChange(event: MatSliderChange) {
    this.consumptionTaxRate = (event.value || 0) / 100;
    this.onConsumptionTaxRateChange();
  }

  onConsumptionTaxRateChange() {
    this.calc();
  }

  onConsumptionTaxChange() {
    this.calc();
  }



  onValueAddedTaxRateSliderChange(event: MatSliderChange) {
    this.valueAddedTaxRate = (event.value || 0) / 100;
    this.onValueAddedTaxRateChange();
  }

  onValueAddedTaxRateChange() {
    this.calc();
  }

  onValueAddedTaxChange() {
    this.calc();
  }
}
