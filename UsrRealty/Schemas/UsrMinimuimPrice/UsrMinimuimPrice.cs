 using System;
using System.Linq;

using System.ServiceModel;
using System.ServiceModel.Web;
using Terrasoft.Core;
using Terrasoft.Core.DB;


namespace Terrasoft.Configuration
{
  [ServiceContract]
 
public class RealtyService
    {
  private readonly UserConnection _userConnection;

  public RealtyService(UserConnection userConnection)
  {
    _userConnection = userConnection;

    }

        [OperationContract]

  [WebInvoke(Method = "POST", ResponseFormat = WebMessageFormat.Json)]

  public int GetMinimumPrice(Guid? realtyTypeId, Guid? offerTypeId)

  {

    // Check for null parameters

    if (!realtyTypeId.HasValue || !offerTypeId.HasValue)
    {

      return -1;
      }

    // Query the database for the minimum price

    Select minPriceSelect = new Select(_userConnection)
    .Column(Func.Min("Price"))
    .From("RealtyTable") 
    // Replace with the actual table name
    .Where("RealtyTypeId").IsEqual(Column.Parameter(realtyTypeId))
    .And("OfferTypeId").IsEqual(Column.Parameter(offerTypeId))
    as Select;
    int minPrice = minPriceSelect.ExecuteScalar<int>();
    // Return the result

    return minPrice;
        
    }
  }
  }