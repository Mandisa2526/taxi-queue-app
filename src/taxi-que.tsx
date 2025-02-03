//
export interface ITaxiQueue {
    joinQueue(): string | null;
    leaveQueue(): string | null;
    joinTaxiQueue(): string | null;
    taxiDepart(): string | null;
    queueLength(): number;
    taxiQueueLength(): number;
    resetQueues(): void; // updated return type
  }
  
  export function TaxiQueue(): ITaxiQueue {
    let passengerQueue = parseInt(
      localStorage.getItem("passengerCount") || "0",
      10
    );
    let taxiQueue = parseInt(localStorage.getItem("taxiCount") || "0", 10);
  
    function joinQueue() {
      passengerQueue++;
      localStorage.setItem("passengerCount", passengerQueue.toString()); // update localStorage
      return null;
    }
  
    function leaveQueue() {
      if (passengerQueue > 0) {
        passengerQueue--;
        localStorage.setItem("passengerCount", passengerQueue.toString()); // update localStorage
        return null;
      } else {
        return "No passengers in a queue";
      }
    }
  
    function joinTaxiQueue() {
      taxiQueue++;
      localStorage.setItem("taxiCount", taxiQueue.toString()); // update localStorage
      return null;
    }
  
    function queueLength() {
      return passengerQueue;
    }
  
    function taxiQueueLength() {
      return taxiQueue;
    }
  
    function taxiDepart() {
      if (passengerQueue >= 12 && taxiQueue > 0) {
        passengerQueue -= 12;
        taxiQueue--;
        localStorage.setItem("passengerCount", passengerQueue.toString()); // update localStorage
        localStorage.setItem("taxiCount", taxiQueue.toString()); // update localStorage
        return "Taxi successfully departed with 12 passengers.";
      } else {
        return "Not enough passengers or taxis for a departure.";
      }
    }
  
    function resetQueues() {
      passengerQueue = 0;
      taxiQueue = 0;
      localStorage.setItem("passengerCount", passengerQueue.toString()); // update localStorage
      localStorage.setItem("taxiCount", taxiQueue.toString()); // update localStorage
    }
  
    return {
      resetQueues,
      joinQueue,
      leaveQueue,
      joinTaxiQueue,
      queueLength,
      taxiQueueLength,
      taxiDepart,
    };
  }