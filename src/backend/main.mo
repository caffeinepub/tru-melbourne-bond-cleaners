import Map "mo:core/Map";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";

actor {
  type Submission = {
    name : Text;
    phone : Text;
    serviceType : Text;
    address : Text;
    message : Text;
  };

  let submissions = Map.empty<Nat, Submission>();
  var nextId = 0;

  public shared ({ caller }) func submitContactForm(name : Text, phone : Text, serviceType : Text, address : Text, message : Text) : async () {
    let id = nextId;
    nextId += 1;
    let submission : Submission = {
      name;
      phone;
      serviceType;
      address;
      message;
    };
    submissions.add(id, submission);
  };

  public shared ({ caller }) func getAllSubmissions() : async [Submission] {
    submissions.values().toArray();
  };
};
