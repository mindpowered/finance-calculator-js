/**
 * Copyright Mind Powered Corporation 2020
 * 
 * https://mindpowered.dev/
 */

const maglev = require('@mindpowered/maglev');
const financecalculator = require('../lib/financecalculator.js');

/**
 * A library for performing various finance calculations
 */
class FinanceCalculator {
	constructor() {
		let bus = maglev.maglev.MagLev.getInstance('default');
		let lib = new financecalculator.financecalculator.FinanceCalculator(bus);
	}

	/**
	 * Calculate present value of future money
	 * @param {number} futureValue Future Value
	 * @param {number} numPeriods Number of Periods
	 * @param {number} interestRate Interest Rate
	 * @return {Promise} object containing Present Value and Total Interest Promise will resolve to type object.
	*/
	PresentValueOfFutureMoney(futureValue, numPeriods, interestRate) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [futureValue, numPeriods, interestRate];
		let ret = jsbus.call('FinanceCalculator.PresentValueOfFutureMoney', args);
		return ret;
	}

	/**
	 * Calculate the present value of future deposits
	 * @param {number} numPeriods Number of Periods
	 * @param {number} interestRate Interest Rate
	 * @param {number} depositAmount Periodic Deposit Amount
	 * @param {boolean} depositAtBeginning Periodic Deposits made at beginning of period
	 * @return {Promise} object containing Present Value, Total Principal, and Total Interest Promise will resolve to type object.
	*/
	PresentValueOfDeposits(numPeriods, interestRate, depositAmount, depositAtBeginning) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [numPeriods, interestRate, depositAmount, depositAtBeginning];
		let ret = jsbus.call('FinanceCalculator.PresentValueOfDeposits', args);
		return ret;
	}

	/**
	 * Calculate the future value of money and/or deposits
	 * @param {number} presentValue Present Value
	 * @param {number} numPeriods Number of Periods
	 * @param {number} interestRate Interest rate as a percentage
	 * @param {number} timesCompoundedPerPeriod Times interest is compounded per period
	 * @param {number} depositAmount Periodic Deposit Amount
	 * @param {boolean} depositAtBeginning Periodic Deposits made at beginning of period
	 * @return {Promise} object containing Future Value and Total Interest Promise will resolve to type object.
	*/
	FutureValue(presentValue, numPeriods, interestRate, timesCompoundedPerPeriod, depositAmount, depositAtBeginning) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [presentValue, numPeriods, interestRate, timesCompoundedPerPeriod, depositAmount, depositAtBeginning];
		let ret = jsbus.call('FinanceCalculator.FutureValue', args);
		return ret;
	}

	/**
	 * Calculate net present value
	 * @param {number} initialInvestment Initial Investment
	 * @param {number} discountRate Discount Rate (eg. Interest Rate)
	 * @param {number} timesCompoundedPerPeriod Times discount/interest is compounded per period
	 * @param {number} cashFlowsAtBeginning 
	 * @param {array} cashFlow List of cash flows per period
	 * @return {Promise} Net Present Value Promise will resolve to type number.
	*/
	NetPresentValue(initialInvestment, discountRate, timesCompoundedPerPeriod, cashFlowsAtBeginning, cashFlow) {
		let jsbus = maglev.maglev.MagLevJs.getInstance('default');
		let args = [initialInvestment, discountRate, timesCompoundedPerPeriod, cashFlowsAtBeginning, cashFlow];
		let ret = jsbus.call('FinanceCalculator.NetPresentValue', args);
		return ret;
	}

}
module.exports = FinanceCalculator;

