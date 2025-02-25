"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    CreditCard,
    QrCode,
    Lock,
    CheckCircle2,
    Loader2,
    Clock,
    BookOpen,
    ArrowBigLeftDashIcon
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import NotFound from "../not-found";
import { Card } from "@/components/ui/card";
import RefreshWarningDialog from "@/components/warnings/RefreshWarning";

// This would typically come from your API/database
const course = {
    id: 1,
    title: "Complete Web Development Bootcamp",
    description: "Master web development with our comprehensive bootcamp. Learn HTML, CSS, JavaScript, React, Node.js, and more.",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&h=600&fit=crop",
    price: 149.99,
    // price: 0.0,
    instructor: {
        name: "John Smith",
        avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100",
    },
    duration: "42 hours",
    lessons: 156,
};

const cardSchema = z.object({
    cardNumber: z.string()
        .min(16, "Card number must be 16 digits")
        .max(16, "Card number must be 16 digits")
        .regex(/^\d+$/, "Card number must contain only digits"),
    cardName: z.string()
        .min(2, "Name must be at least 2 characters")
        .regex(/^[a-zA-Z\s]+$/, "Name must contain only letters"),
    expiryDate: z.string()
        .regex(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, "Invalid expiry date (MM/YY)")
        .refine((value) => {
            const [month, yearStr] = value.split('/');
            const year = parseInt(yearStr);
            const currentYear = new Date().getFullYear() % 100; // Get last 2 digits of current year
            const currentMonth = new Date().getMonth() + 1; // 1-12

            // Check if year is valid (current year up to 10 years in future)
            if (year < currentYear || year > currentYear + 10) {
                return false;
            }

            // If it's current year, check if month is valid
            if (year === currentYear && parseInt(month) < currentMonth) {
                return false;
            }

            return true;
        }, "Invalid expiry date"),
    cvv: z.string()
        .min(3, "CVV must be 3 digits")
        .max(3, "CVV must be 3 digits")
        .regex(/^\d+$/, "CVV must contain only digits"),
});

export default function CheckoutPage() {
    const router = useRouter();
    const [paymentMethod, setPaymentMethod] = useState("card");
    const [isProcessing, setIsProcessing] = useState(false);
    const [showQR, setShowQR] = useState(false);
    const [isAuthorized, setIsAuthorized] = useState(true);
    const [showRefreshWarning, setShowRefreshWarning] = useState(false);

    // useEffect(() => {
    //     // Check if user came from course page with proper authorization
    //     const authorized = searchParams.get("authorized") === "true";
    //     setIsAuthorized(authorized);
    // }, [searchParams]);

    const form = useForm<z.infer<typeof cardSchema>>({
        resolver: zodResolver(cardSchema),
        defaultValues: {
            cardNumber: "",
            cardName: "",
            expiryDate: "",
            cvv: "",
        },
    });

    const handlePayment = async (values: z.infer<typeof cardSchema>) => {
        setIsProcessing(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        toast.success("Payment successful! Redirecting to dashboard...");
        await new Promise(resolve => setTimeout(resolve, 1000));
        router.push("/dashboard");
    };

    const handleQRPayment = async () => {
        setIsProcessing(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        toast.success("Payment successful! Redirecting to dashboard...");
        await new Promise(resolve => setTimeout(resolve, 1000));
        router.push("/dashboard");
    };

    const handleFreeEnrollment = async () => {
        setIsProcessing(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        toast.success("Successfully enrolled! Redirecting to dashboard...");
        await new Promise(resolve => setTimeout(resolve, 1000));
        router.push("/dashboard");
    };

    const formatExpiryDate = (value: string) => {
        // Remove any non-digit characters
        const digits = value.replace(/\D/g, "");

        if (digits.length === 0) return "";

        // Handle backspace when there's a forward slash
        if (value.endsWith("/") && digits.length === 1) return "";

        if (digits.length <= 2) {
            // Validate month
            const month = parseInt(digits);
            if (month > 12) return "12";
            return digits;
        }

        // Format as MM/YY
        const formattedValue = `${digits.slice(0, 2)}/${digits.slice(2, 4)}`;
        return formattedValue;
    };

    const handleCardNumberInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, "");
        form.setValue("cardNumber", value, { shouldValidate: true });
    };

    const handleCVVInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, "");
        form.setValue("cvv", value, { shouldValidate: true });
    };

    const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[^a-zA-Z\s]/g, ""); // Allow only letters and spaces
        form.setValue("cardName", value, { shouldValidate: true });
    };


    if (!isAuthorized) {
        return <NotFound />;
    }

    return (
        <main className="py-12">
            {/* <RefreshWarningDialog isVisible={showRefreshWarning} /> */}
            {showRefreshWarning ? <RefreshWarningDialog isVisible={showRefreshWarning} /> : <RefreshWarningDialog />}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p onClick={() => setShowRefreshWarning(true)} className="flex items center gap-2 text-gray-600 hover:text-appPurple-900 transition-colors mb-4 cursor-pointer w-fit"><ArrowBigLeftDashIcon />Go Back</p>
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left Column - Course Details */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card className="">
                            <div className="relative h-48">
                                <Image
                                    src={course.image}
                                    alt={course.title}
                                    fill
                                    className="object-cover rounded-t-lg"
                                />
                            </div>
                            <div className="p-6">
                                <h1 className="text-2xl leading-[1.2] font-medium mb-4">
                                    {course.title}
                                </h1>
                                <p className="text-gray-600 mb-6">
                                    {course.description}
                                </p>
                                <div className="flex items-center gap-4 mb-6">
                                    <Image
                                        src={course.instructor.avatar}
                                        alt={course.instructor.name}
                                        width={40}
                                        height={40}
                                        className="rounded-full"
                                    />
                                    <div>
                                        <p className="font-medium text-gray-900">
                                            {course.instructor.name}
                                        </p>
                                        <p className="text-sm text-gray-600">Instructor</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between text-sm text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4" />
                                        <span>{course.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <BookOpen className="w-4 h-4" />
                                        <span>{course.lessons} lessons</span>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6 my-4 relative overflow-hidden">
                            <p className="text-sm text-gray-500 mb-2 ">Advertisement</p>
                            <p className="absolute top-2 right-0 bg-gray-100 px-2 py-1 text-sm font-medium">Nectar Health</p>
                            <div className="bg-gradient-to-r from-appGreen-300 to-appGreen-200 rounded-lg p-4 text-gray-700">
                                <h4 className="font-semibold mb-2">Wellness Workshop</h4>
                                <p className="text-sm mb-4">Join our exclusive online workshop on mindful living</p>
                                <button className="bg-white text-appGreen-900 px-4 py-2 rounded-full text-sm font-medium">
                                    Register Now
                                </button>
                            </div>
                        </Card>
                    </motion.div>

                    {/* Right Column - Payment */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Card className="p-8">
                            <div className="flex flex-wrap gap-6 items-center justify-between mb-8">
                                <h2 className="text-nowrap text-2xl leading-[1.2] font-medium">
                                    Payment Details
                                </h2>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <Lock className="w-4 h-4" />
                                    <span className="text-sm">Secure Checkout</span>
                                </div>
                            </div>

                            {course.price > 0 ? (
                                <Tabs defaultValue="card" className="w-full" onValueChange={setPaymentMethod}>
                                    <TabsList className="grid w-full grid-cols-2 mb-8 bg-gray-100/80">
                                        <TabsTrigger value="card" className="flex items-center gap-2">
                                            <CreditCard className="w-4 h-4" />
                                            Card
                                        </TabsTrigger>
                                        <TabsTrigger value="qr" className="flex items-center gap-2">
                                            <QrCode className="w-4 h-4" />
                                            QR Code
                                        </TabsTrigger>
                                    </TabsList>

                                    <TabsContent value="card">
                                        <Form {...form}>
                                            <form onSubmit={form.handleSubmit(handlePayment)} className="space-y-6">
                                                <FormField
                                                    control={form.control}
                                                    name="cardNumber"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Card Number</FormLabel>
                                                            <FormControl>
                                                                <Input
                                                                    placeholder="1234 5678 9012 3456"
                                                                    {...field}
                                                                    maxLength={16}
                                                                    onChange={handleCardNumberInput}
                                                                    inputMode="numeric"
                                                                />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />

                                                <FormField
                                                    control={form.control}
                                                    name="cardName"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Cardholder Name</FormLabel>
                                                            <FormControl>
                                                                <Input
                                                                    placeholder="John Doe"
                                                                    {...field}
                                                                    inputMode="text"
                                                                    onChange={handleNameInput}
                                                                />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />

                                                <div className="grid grid-cols-2 gap-4">
                                                    <FormField
                                                        control={form.control}
                                                        name="expiryDate"
                                                        render={({ field: { onChange, ...field } }) => (
                                                            <FormItem>
                                                                <FormLabel>Expiry Date</FormLabel>
                                                                <FormControl>
                                                                    <Input
                                                                        placeholder="MM/YY"
                                                                        {...field}
                                                                        onChange={(e) => {
                                                                            const formatted = formatExpiryDate(e.target.value);
                                                                            e.target.value = formatted;
                                                                            onChange(e);
                                                                            // Trigger validation after formatting
                                                                            form.trigger("expiryDate");
                                                                        }}
                                                                        maxLength={5}
                                                                        inputMode="numeric"
                                                                    />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />

                                                    <FormField
                                                        control={form.control}
                                                        name="cvv"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel>CVV</FormLabel>
                                                                <FormControl>
                                                                    <Input
                                                                        type="password"
                                                                        placeholder="123"
                                                                        {...field}
                                                                        maxLength={3}
                                                                        onChange={handleCVVInput}
                                                                        inputMode="numeric"
                                                                    />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                </div>

                                                <div className="pt-4">
                                                    <Button
                                                        type="submit"
                                                        className="w-full"
                                                        disabled={isProcessing}
                                                    >
                                                        {isProcessing ? (
                                                            <>
                                                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                                                Processing...
                                                            </>
                                                        ) : (
                                                            <>Pay ${course.price}</>
                                                        )}
                                                    </Button>
                                                </div>
                                            </form>
                                        </Form>
                                    </TabsContent>

                                    <TabsContent value="qr">
                                        <div className="text-center">
                                            <div className="relative w-64 h-64 mx-auto mb-6">
                                                {showQR ? (
                                                    <Image
                                                        src="https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=example-payment"
                                                        alt="Payment QR Code"
                                                        width={256}
                                                        height={256}
                                                        className="rounded-lg"
                                                    />
                                                ) : (
                                                    <div className="absolute inset-0 bg-gray-100 rounded-lg backdrop-blur-lg flex items-center justify-center">
                                                        <Button
                                                            onClick={() => setShowQR(true)}
                                                            variant="outline"
                                                        >
                                                            Show QR Code
                                                        </Button>
                                                    </div>
                                                )}
                                            </div>
                                            <p className="text-gray-600 mb-6">
                                                Scan the QR code with your mobile banking app to complete the payment
                                            </p>
                                            <Button
                                                onClick={handleQRPayment}
                                                className="w-full"
                                                disabled={isProcessing}
                                            >
                                                {isProcessing ? (
                                                    <>
                                                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                                        Processing...
                                                    </>
                                                ) : (
                                                    <>Verify Payment</>
                                                )}
                                            </Button>
                                        </div>
                                    </TabsContent>
                                </Tabs>
                            ) : (
                                <div className="text-center">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 0.5 }}
                                        className="w-16 h-16 bg-appPurple-900/10 rounded-full flex items-center justify-center mx-auto mb-6"
                                    >
                                        <CheckCircle2 className="w-8 h-8 text-appPurple-900" />
                                    </motion.div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        Free Course
                                    </h3>
                                    <p className="text-gray-600 mb-8">
                                        This course is available for free. Click below to enroll.
                                    </p>
                                    <Button
                                        onClick={handleFreeEnrollment}
                                        className="w-full"
                                        disabled={isProcessing}
                                    >
                                        {isProcessing ? (
                                            <>
                                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                                Processing...
                                            </>
                                        ) : (
                                            <>Enroll Now</>
                                        )}
                                    </Button>
                                </div>
                            )}

                            {/* Security Notice */}
                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <Lock className="w-4 h-4" />
                                    <p>
                                        Your payment information is secure and encrypted
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}