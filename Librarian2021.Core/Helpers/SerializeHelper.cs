using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Librarian2021.Core.Helpers
{
    public class SerializerHelper
    {
        public static T JsonSerialize<T>(T obj)
        {
            var result = JsonConvert.SerializeObject(obj,
                new JsonSerializerSettings
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore,
                    StringEscapeHandling = StringEscapeHandling.EscapeHtml,
                    ContractResolver = new CamelCasePropertyNamesContractResolver()
                });
            return JsonConvert.DeserializeObject<T>(result);
        }
    }
}
