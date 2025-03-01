/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// src/components/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, Spinner } from 'flowbite-react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Dashboard = () => {
  const MySwal = withReactContent(Swal);
  const [bundles, setBundles] = useState([]);
  const [loadingStates, setLoadingStates] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedBundle, setSelectedBundle] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [groups, setGroups] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageContent, setMessageContent] = useState("");
  const [path,setPath]=useState("");

  

  // Mock data fetching
  useEffect(() => {
    // Replace this with actual API call
    const normalWeather = [
      "Jalandhar - Amritsar - 20 - Truck - 8:30 to 9:00 - Rs 1400",
      "Patiyala - Amritsar - 30 - Train - 8:00 to 8:40 - Rs 1500",
      "Amritsar - Bombay - 60 - Flight - 10:30 to 12:00 - Rs 20000",
      "Bombay - Chennai - 60 - Flight - 14:00 to 16:00 - Rs 15000",
      "Chennai - Coimbatore - 20 - Train - 16:30 to 17:00 - Rs 1200",
      "Chennai - Vellore - 10 - Train - 17:00 to 17:30 - Rs 500",
      "Jalandhar - Madurai - 30 - Truck - 16:15 to 17:00 - Rs 600"
    ]

    const harshWeather = [
      "Jalandhar - Amritsar - 20 - Truck - 8:30 to 9:00 - Rs 1400",
      "Patiyala - Amritsar - 30 - Train - 8:00 to 8:40 - Rs 1500",
      "Amritsar - Kolkata - 60 - Flight - 11:30 to 12:00 - Rs 25000",
      "Kolkata - Chennai - 60 - Flight - 14:00 to 17:00 - Rs 24000",
      "Chennai - Coimbatore - 20 - Train - 17:30 to 18:00 - Rs 1200",
      "Chennai - Vellore - 10 - Train - 18:00 to 18:30 - Rs 500",
      "Jalandhar - Madurai - 30 - Truck - 17:15 to 18:00 - Rs 800"
    ]

    // const bundles = [];

   

    const mockBundles = [
      { 
        id: 'B001', 
        senderNode: 'Jalandhar', 
        receiverNode: 'Madurai', 
        status: 'on-time', 
        parcels: [
          { parcelId: 'P001', mailId: 'M123', weight: '2kg', dimensions: '30x20x15 cm' },
          { parcelId: 'P002', mailId: 'M124', weight: '3kg', dimensions: '25x25x20 cm' },
          { parcelId: 'P003', mailId: 'M125', weight: '1kg', dimensions: '15x10x8 cm' },
          { parcelId: 'P004', mailId: 'M126', weight: '5kg', dimensions: '40x30x20 cm' },
          { parcelId: 'P005', mailId: 'M127', weight: '2.5kg', dimensions: '35x25x18 cm' },
          { parcelId: 'P005', mailId: 'M127', weight: '2.5kg', dimensions: '35x25x18 cm' },
          { parcelId: 'P005', mailId: 'M127', weight: '2.5kg', dimensions: '35x25x18 cm' },
         
        ],
        path: {
          mode: 'Rail',
          route: ['Jalandhar', 'Amritsar', 'Delhi', 'Madurai']
        }
      },
      { 
        id: 'B002', 
        senderNode: 'Patiyala', 
        receiverNode: 'Madurai', 
        status: 'delayed', 
        parcels: [
          { parcelId: 'P006', mailId: 'M128', weight: '3kg', dimensions: '28x22x18 cm' },
          { parcelId: 'P007', mailId: 'M129', weight: '2.5kg', dimensions: '32x24x16 cm' },
          { parcelId: 'P008', mailId: 'M130', weight: '1.2kg', dimensions: '22x18x12 cm' },
          { parcelId: 'P009', mailId: 'M131', weight: '4kg', dimensions: '38x30x22 cm' },
          { parcelId: 'P010', mailId: 'M132', weight: '6kg', dimensions: '45x35x25 cm' }
        ],
        path: {
          mode: 'Air',
          route: ['Patiyala', 'Delhi', 'Mumbai', 'Madurai']
        }
      },
      { 
        id: 'B003', 
        senderNode: 'Ludhiana', 
        receiverNode: 'Vellore', 
        status: 'on-time', 
        parcels: [
          { parcelId: 'P011', mailId: 'M133', weight: '1.5kg', dimensions: '20x15x10 cm' },
          { parcelId: 'P012', mailId: 'M134', weight: '3.2kg', dimensions: '28x22x14 cm' },
          { parcelId: 'P013', mailId: 'M135', weight: '2kg', dimensions: '25x20x12 cm' },
          { parcelId: 'P014', mailId: 'M136', weight: '4.5kg', dimensions: '35x25x20 cm' },
          { parcelId: 'P015', mailId: 'M137', weight: '3.8kg', dimensions: '40x30x18 cm' },
          { parcelId: 'P016', mailId: 'M137', weight: '3.8kg', dimensions: '40x30x18 cm' },
          { parcelId: 'P016', mailId: 'M137', weight: '3.8kg', dimensions: '40x30x18 cm' },
        ],
        path: {
          mode: 'Rail',
          route: ['Ludhiana', 'Chandigarh', 'Bangalore', 'Vellore']
        }
      },
      { 
        id: 'B004', 
        senderNode: 'Amritsar', 
        receiverNode: 'Coimbatore', 
        status: 'delayed', 
        parcels: [
          { parcelId: 'P016', mailId: 'M138', weight: '3kg', dimensions: '33x28x22 cm' },
          { parcelId: 'P017', mailId: 'M139', weight: '5.5kg', dimensions: '50x40x30 cm' },
          { parcelId: 'P018', mailId: 'M140', weight: '2.1kg', dimensions: '25x20x12 cm' },
          { parcelId: 'P019', mailId: 'M141', weight: '4.2kg', dimensions: '45x35x20 cm' },
          { parcelId: 'P020', mailId: 'M142', weight: '3.5kg', dimensions: '38x28x18 cm' },
          { parcelId: 'P020', mailId: 'M142', weight: '3.5kg', dimensions: '38x28x18 cm' },
          { parcelId: 'P020', mailId: 'M142', weight: '3.5kg', dimensions: '38x28x18 cm' },
          { parcelId: 'P020', mailId: 'M142', weight: '3.5kg', dimensions: '38x28x18 cm' },
          { parcelId: 'P020', mailId: 'M142', weight: '3.5kg', dimensions: '38x28x18 cm' },
        ],
        path: {
          mode: 'Rail',
          route: ['Amritsar', 'Delhi', 'Hyderabad', 'Coimbatore']
        }
      },
      { 
        id: 'B005', 
        senderNode: 'Chandigarh', 
        receiverNode: 'Coimbatore', 
        status: 'on-time', 
        parcels: [
          { parcelId: 'P021', mailId: 'M143', weight: '2kg', dimensions: '30x25x15 cm' },
          { parcelId: 'P022', mailId: 'M144', weight: '3kg', dimensions: '28x24x16 cm' },
          { parcelId: 'P023', mailId: 'M145', weight: '4kg', dimensions: '35x30x20 cm' },
          { parcelId: 'P024', mailId: 'M146', weight: '1kg', dimensions: '20x15x10 cm' },
          { parcelId: 'P025', mailId: 'M147', weight: '2.5kg', dimensions: '25x20x15 cm' },
          { parcelId: 'P025', mailId: 'M147', weight: '2.5kg', dimensions: '25x20x15 cm' },
        ],
        path: {
          mode: 'Air',
          route: ['Chandigarh', 'Delhi', 'Bangalore', 'Coimbatore']
        }
      },
      // { 
      //   id: 'B006', 
      //   senderNode: 'New Delhi', 
      //   receiverNode: 'Bangalore', 
      //   status: 'on-time', 
      //   parcels: [
      //     { parcelId: 'P026', mailId: 'M148', weight: '1.8kg', dimensions: '25x22x14 cm' },
      //     { parcelId: 'P027', mailId: 'M149', weight: '3.6kg', dimensions: '32x28x18 cm' },
      //     { parcelId: 'P028', mailId: 'M150', weight: '2.2kg', dimensions: '26x20x16 cm' },
      //     { parcelId: 'P029', mailId: 'M151', weight: '4.8kg', dimensions: '40x30x20 cm' },
      //     { parcelId: 'P030', mailId: 'M152', weight: '3.9kg', dimensions: '45x35x22 cm' }
      //   ],
      //   path: {
      //     mode: 'Rail',
      //     route: ['New Delhi', 'Nagpur', 'Hyderabad', 'Bangalore']
      //   }
      // }
        ];
        setBundles(mockBundles);
      }, []);

   

    
  const handleRowClick = (bundle) => {
    console.log(bundle);
    console.log(bundle.path);
    setPath(bundle.path);
    console.log(path);

    setSelectedBundle(bundle);
    setShowModal(true);
  };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const handleButtonClick = async (bundleId) => {
    console.log(bundleId);
    setLoadingStates((prev) => ({ ...prev, [bundleId]: true })); // Set loading for this button
    await sleep(2000); // Sleep for 2 seconds
    try {
      await handleApplyAlgo(bundleId); // Call the API for this bundle
    } finally {
      setLoadingStates((prev) => ({ ...prev, [bundleId]: false })); // Reset loading state
    }
    setShowModal(true);

  };


  const all=async()=>{
    MySwal.fire({
      icon: "success",
      title: "PATH",
      text: "Jalandhar - Amritsar - 20 - Truck - 8:30 to 9:00 - Rs 1400, Patiyala - Amritsar - 30 - Train - 8:00 to 8:40 - Rs 1500, Amritsar - Kolkata - 60 - Flight - 11:30 to 12:00 - Rs 25000, Kolkata - Chennai - 60 - Flight - 14:00 to 17:00 - Rs 24000, Chennai - Coimbatore - 20 - Train - 17:30 to 18:00 - Rs 1200, Chennai - Vellore - 10 - Train - 18:00 to 18:30 - Rs 500, Jalandhar - Madurai - 30 - Truck - 17:15 to 18:00 - Rs 800".split(",").join("\n"),
    });
  }

  const handleApplyAlgo = async (bundleId) => {
    const weatherGood = Math.random()%2;
    const routeDetails = path.route.join(" → "); 
    console.log(routeDetails);
    if(weatherGood)
    {
      MySwal.fire({
        icon: "success",
        title: "PATH",
        text: `Mode: ${path.mode}\nRoute: ${routeDetails}`,
      });
    }
    else 
    {
      MySwal.fire({
        icon: "success",
        title: "PATH",
        text: "Jalandhar - Amritsar - 20 - Truck - 8:30 to 9:00 - Rs 1400, Patiyala - Amritsar - 30 - Train - 8:00 to 8:40 - Rs 1500, Amritsar - Kolkata - 60 - Flight - 11:30 to 12:00 - Rs 25000, Kolkata - Chennai - 60 - Flight - 14:00 to 17:00 - Rs 24000, Chennai - Coimbatore - 20 - Train - 17:30 to 18:00 - Rs 1200, Chennai - Vellore - 10 - Train - 18:00 to 18:30 - Rs 500, Jalandhar - Madurai - 30 - Truck - 17:15 to 18:00 - Rs 800".split(",").join("\n"),
      });
    }
    
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const updatedBundles = bundles.map((bundle) =>
        bundle.id === bundleId ? { ...bundle, optimizedPath: 'Optimized Route X' } : bundle
      );
      setBundles(updatedBundles);
      setLoading(false);

      // alert("Hello");

    }, 2000);
  };

  const handleNotify=()=>{
    MySwal.fire({
        icon: "success",
        title: "Notified ",
        text: "Message Sent 📤"
      });
  }

  const handleSendMessage = (nodeId) => {
    // setModalType("message");
    // setSelectedNode(nodeId);
    setIsModalOpen(true);
  };



  return (
    <div className="p-6 bg-gray-100 min-h-screen dark:bg-slate-800">
      <h1 className="text-2xl font-bold mb-4 mt-12 ">Dynamic Mail Transmission Route Visualization</h1>
      <div className="overflow-x-auto">
      <Button
       className='mx-4 mb-4 '
      onClick={async () => {
        setLoadingStates((prev) => {
          const allLoading = {};
          bundles.forEach((bundle) => {
            allLoading[bundle.id] = true;
          });
          return allLoading;
        });

        try {
          all();
          for (const bundle of bundles) {
            await handleButtonClick(bundle.id); // Handle each bundle sequentially
          }
        } finally {
          setLoadingStates((prev) => {
            const allLoading = {};
            bundles.forEach((bundle) => {
              allLoading[bundle.id] = false;
            });
            return allLoading;
          });
        }
      }}
      gradientDuoTone="purpleToBlue"
    >
      Find Optimal Path for All
    </Button>
        <Table>
          <Table.Head>
            <Table.HeadCell>Bundle ID</Table.HeadCell>
            <Table.HeadCell>Sender Node</Table.HeadCell>
            <Table.HeadCell>Receiver Node</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
            <Table.HeadCell>Parcels</Table.HeadCell>
            <Table.HeadCell>Actions</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y ">
            {bundles.map((bundle) => (
              <Table.Row
                key={bundle.id}
                className="bg-white hover:bg-gray-100 dark:bg-slate-400 cursor-pointer"
                onClick={() => handleRowClick(bundle)}
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-wh">
                  {bundle.id}
                </Table.Cell>
                <Table.Cell className='dark:text-black'>{bundle.senderNode}</Table.Cell>
                <Table.Cell className='dark:text-black'> {bundle.receiverNode}</Table.Cell>
                <Table.Cell>
                  {bundle.status === 'delayed' ? (
                    <span className="text-red-500 font-bold">Pending</span>
                  ) : (
                    <span className="text-green-500 dark:text-blue-500 font-bold">Arrived</span>
                  )}
                </Table.Cell>
                <Table.Cell className='dark:text-black'>{bundle.parcels.length}</Table.Cell>
                <Table.Cell>
                <Button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent row click event
                    handleButtonClick(bundle.id); // Call individual button handler
                  }}
                  disabled={loadingStates[bundle.id]} // Disable only this button
                  gradientDuoTone="purpleToBlue"
                >
                  {loadingStates[bundle.id] ? (
                    <Spinner size="sm" light />
                  ) : (
                    "Optimized Path"
                  )}
                </Button>
                  
                
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>

      {/* Modal for Bundle Details */}
        {selectedBundle && (
        <Modal show={showModal} onClose={() => setShowModal(false)} size="lg">
            <Modal.Header>Bundle Details</Modal.Header>
            <Modal.Body>
            <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <div className="flex flex-col md:flex-row justify-between items-start">
                    <div className="mb-4 md:mb-0">
                    <span className="text-lg font-semibold text-gray-700">Bundle ID:</span>
                    <p className="text-xl font-bold text-gray-900">{selectedBundle.id}</p>
                    </div>
                    <div>
                    <span className="text-lg font-semibold text-gray-700">Sender Node:</span>
                    <p className="text-lg text-gray-900">{selectedBundle.senderNode}</p>
                    </div>
                </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <div className="flex flex-col md:flex-row justify-between items-start">
                    <div className="mb-4 md:mb-0">
                    <span className="text-lg font-semibold text-gray-700">Receiver Node:</span>
                    <p className="text-lg text-gray-900">{selectedBundle.receiverNode}</p>
                    </div>
                    <div>
                    <span className="text-lg font-semibold text-gray-700">Optimized Path:</span>
                    <p className="text-lg text-gray-900">
                        {selectedBundle.optimizedPath || 'Not Optimized'}
                    </p>
                    </div>
                </div>
                </div>

                <div className="mt-6">
                <h3 className="text-2xl font-semibold text-gray-800">Parcel Details</h3>
                <div className="mt-4">
                    <ul className="space-y-4">
                    {selectedBundle.parcels.map((parcel) => (
                        <li key={parcel.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <div className="flex flex-col sm:flex-row justify-between items-start">
                            <div className="sm:w-1/2">
                            <div className="text-lg font-semibold text-gray-700">Parcel ID:</div>
                            <p className="text-md text-gray-900">{parcel.id}</p>
                            </div>
                            <div className="sm:w-1/2 mt-4 sm:mt-0">
                            <div className="text-lg font-semibold text-gray-700">Status:</div>
                            <p
                                className={`text-md font-medium ${
                                parcel.status === 'Delivered'
                                    ? 'text-green-500'
                                    : parcel.status === 'In Transit'
                                    ? 'text-blue-500'
                                    : 'text-red-500'
                                }`}
                            >
                                {parcel.status}
                            </p>
                            </div>
                        </div>
                        <div className="mt-4 sm:flex sm:justify-between">
                            <div className="sm:w-1/2">
                            <div className="text-md font-semibold text-gray-700">Sender:</div>
                            <p className="text-sm text-gray-900">{parcel.sender}</p>
                            </div>
                            <div className="sm:w-1/2 mt-4 sm:mt-0">
                            <div className="text-md font-semibold text-gray-700">Receiver:</div>
                            <p className="text-sm text-gray-900">{parcel.receiver}</p>
                            </div>
                        </div>
                        <div className="mt-4 sm:flex sm:justify-between">
                            <div className="sm:w-1/2">
                            <div className="text-md font-semibold text-gray-700">Weight:</div>
                            <p className="text-sm text-gray-900">{parcel.weight}</p>
                            </div>
                            <div className="sm:w-1/2 mt-4 sm:mt-0">
                            <div className="text-md font-semibold text-gray-700">Dimensions:</div>
                            <p className="text-sm text-gray-900">{parcel.dimensions}</p>
                            </div>
                        </div>
                        <div className="mt-4 sm:flex sm:justify-between">
                             <div className="sm:w-1/2">
                            <div className="text-md font-semibold text-gray-700">Destination:</div>
                            <p className="text-sm text-gray-900">{parcel.destination}</p>
                            </div>
                            <div className="sm:w-1/2 mt-4 sm:mt-0">
                            <Button
                                onClick={handleSendMessage}
                                disabled={loading}
                                // color="dark"
                                gradientMonochrome="failure"
                            >
                                {loading ? <Spinner size="sm" light /> : 'Send Message'}
                            </Button>
                            </div>
                        </div>
                        </li>
                    ))}
                    </ul>
                </div>
                </div>
            </div>
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={() => setShowModal(false)} color="gray">
                Close
            </Button>
            </Modal.Footer>
        </Modal>
        )}

<Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <Modal.Header>
            {" "}
            <div className="flex items-center gap-2">
              
                
            
                <span className="text-blue-600">
                  {/* Message symbol */}
                  📩
                </span>
            
              <h2 className="text-lg font-semibold">
                Send Message
              </h2>
            </div>
          </Modal.Header>
          <Modal.Body
            className="rounded-lg 
               bg-red-200" 
          >
            <textarea
              className="w-full p-2 border rounded-md"
              rows="4"
              placeholder="Enter your message here..."
              value={messageContent}
              onChange={(e) => setMessageContent(e.target.value)}
            ></textarea>
          </Modal.Body>
          <Modal.Footer>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
              onClick={() => {
                handleNotify();
                setIsModalOpen(false);
              }}
            >
              Submit
            </button>
            <button
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </button>
          </Modal.Footer>
        </Modal>
    </div>

  );
};

export default Dashboard;